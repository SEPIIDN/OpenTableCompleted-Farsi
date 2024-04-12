import { PrismaClient } from "@prisma/client";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { slug, day, time, partySize } = req.query;
        const { bookerEmail, bookerPhone, bookerFirstName, bookerLastName, bookerOccasion, bookerRequest } = req.body;

        const restaurant = await prisma.restaurant.findUnique({
            where: {
                slug
            },
            select: {
                id: true,
                tables: true,
                open_time: true,
                close_time: true
            }
        })

        if (!restaurant) {
            return res.status(400).json({
                errorMessage: "رستوران مورد نظر یافت نشد!"
            })
        }
        if (
            new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
            new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
        ) {
            return res.status(400).json({
                errorMessage: "رستوران مورد نظر در بازه زمانی مشخص شده باز نیست!"
            })
        }

        const searchTimesWithTables = await findAvailableTables({
            day,
            time,
            res,
            restaurant
        })
        if (!searchTimesWithTables) {
            return res.status(400).json({
                errorMessage: "داده های اشتباه وارد شده اند!"
            })
        }
        const searchedTime = searchTimesWithTables.find((t) => {
            return t.date.toISOString() === new Date(`${day}T${time}`).toISOString()
        })
        if (!searchedTime) {
            return res.status(400).json({
                errorMessage: "زمان مورد نظر در دسترس نیست"
            })
        }

        const tableCounter = {
            2: [],
            4: []
        }
        searchedTime.tables.forEach(table => {
            if (table.seats === 2) {
                tableCounter[2].push(table.id)
            } else {
                tableCounter[4].push(table.id)
            }
        });
        const tablesToBook = [];
        let remainingSeats = parseInt(partySize);
        while (remainingSeats > 0) {
            if (remainingSeats >= 3) {
                if (tableCounter[4].length) {
                    tablesToBook.push(tableCounter[4][0])
                    tableCounter[4].shift();
                    remainingSeats -= 4;
                } else {
                    tablesToBook.push(tableCounter[2][0])
                    tableCounter[2].shift();
                    remainingSeats -= 2;
                }

            } else {
                if (tableCounter[2].length) {
                    tablesToBook.push(tableCounter[2][0])
                    tableCounter[2].shift();
                    remainingSeats -= 2;
                } else {
                    tablesToBook.push(tableCounter[4][0])
                    tableCounter[4].shift();
                    remainingSeats -= 4;
                }
            }
        }

        const booking = await prisma.booking.create({
            data: {
                number_of_people: parseInt(partySize),
                booking_time: new Date(`${day}T${time}`),
                booker_email: bookerEmail,
                booker_phone: bookerPhone,
                booker_first_name: bookerFirstName,
                booker_last_name: bookerLastName,
                booker_occasion: bookerOccasion,
                booker_request: bookerRequest,
                restaurant_id: restaurant.id
            }
        })

        const bookingOnTableData = tablesToBook.map(table_id => {
            return {
                table_id,
                booking_id: booking.id
            }
        })

        await prisma.bookingOnTable.createMany({
            data: bookingOnTableData
        })

        return res.json({
            booking
        })
    }
}

// http://localhost:3000/api/restaurant/%D8%A7%DB%8C%DA%98%DB%8C%D9%86-%D9%84%D8%A7%D9%86%DA%98-%D8%AA%D9%87%D8%B1%D8%A7%D9%86/reserve?day=2024-01-19&time=15:00:00.000Z&partySize=4