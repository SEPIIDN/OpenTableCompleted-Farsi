import { PrismaClient } from "@prisma/client";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const errors = [];

        const validateSchema = [
            {
                valid: validator.isEmail(email),
                errorMessage: 'پست الکترونیکی غیرقابل قبول!'
            },
            {
                valid: validator.isLength(password, {
                    min: 1
                }),
                errorMessage: 'کلمه عبور اشتباه است!'
            }
        ]
        validateSchema.forEach((check) => {
            if (!check.valid) {
                errors.push(check.errorMessage)
            }
        })
        if (errors.length) {
            return res.status(400).json({ errorMessage: errors[0] })
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            return res.status(401).json({ errorMessage: 'رمز عبور یا پست الکترونیکی اشتباه میباشد!' })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ errorMessage: 'رمز عبور یا پست الکترونیکی اشتباه میباشد!' })
        }

        const alg = "HS256";
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

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
    return res.status(404).json('Unknown Endpoint')
}