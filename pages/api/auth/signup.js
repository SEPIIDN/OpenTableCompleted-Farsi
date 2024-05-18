import { PrismaClient } from "@prisma/client";
import validator from "validator";
import bcrypt from "bcrypt";
import { setCookie } from "cookies-next";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, city, password } = req.body;

        const errors = [];

        const validateSchema = [{
            valid: validator.isLength(firstName, {
                min: 1,
                max: 20
            }),
            errorMessage: 'نام غیرقابل قبول!'
        },
        {
            valid: validator.isLength(lastName, {
                min: 1,
                max: 20
            }),
            errorMessage: 'نام خانوادگی غیرقابل قبول!'
        },
        {
            valid: validator.isEmail(email),
            errorMessage: 'پست الکترونیکی غیرقابل قبول!'
        },
        {
            valid: validator.isMobilePhone(phone),
            errorMessage: 'شماره تلفن غیرقابل قبول!'
        },
        {
            valid: validator.isLength(city, {
                min: 1,
            }),
            errorMessage: 'شهر غیرقابل قبول'
        },
        {
            valid: validator.isStrongPassword(password, {
                min: 1,
                max: 20
            }),
            errorMessage: 'کلمه عبور شما ضعیف است!'
        }
        ];

        validateSchema.forEach((check) => {
            if (!check.valid) {
                errors.push(check.errorMessage)
            }
            if (errors.length) {
                return res.status(400).json({ errorMessage: errors[0] })
            }
        })

        const userByEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userByEmail) {
            return res.status(400).json({ errorMessage: 'پست الکترونیکی تکراری میباشد!' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                password: hashedPassword,
                city,
                phone,
                email
            }
        })

        const alg = "HS256";

        const secret = new TextEncoder().encode(process.env.JWT_SECRET)

        const token = await new jose.SignJWT({ email: user.email }).setProtectedHeader({ alg }).setExpirationTime("24h").sign(secret);

        setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 })

        return res.status(200).json({
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            city: user.city,
            phone: user.phone
        })
    }
    return res.status(404).json('Unknwon Endpoint')
}
