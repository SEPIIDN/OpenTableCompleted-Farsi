import { times } from "../../../../data";
import { PrismaClient } from "@prisma/client";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { slug, day, time, partySize } = req.query;

        if (!day || !time || !partySize) {
            return res.status(400).json({
                errorMessage: "داده های اشتباه وارد شده اند!"
            })
        }


        const restaurant = await prisma.restaurant.findUnique({
            where: {
                slug
            },
            select: {
                tables: true,
                open_time: true,
                close_time: true
            }
        })
        if (!restaurant) {
            return res.status(400).json({
                errorMessage: "داده های اشتباه وارد شده اند!"
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

        const availabilities = searchTimesWithTables.map(t => {
            const sumSeats = t.tables.reduce((sum, table) => {
                return sum + table.seats
            }, 0)

            return {
                time: t.time,
                available: sumSeats >= parseInt(partySize)
            }
        }).filter(availability => {
            const timeAfterOpening = new Date(`${day}T${availability.time}`) >= new Date(`${day}T${restaurant.open_time}`);
            const timeBeforeClosing = new Date(`${day}T${availability.time}`) <= new Date(`${day}T${restaurant.close_time}`);
            return timeAfterOpening && timeBeforeClosing
        })

        return res.json(availabilities)
    }
}

//http://localhost:3000/api/restaurant/%D8%A7%DB%8C%DA%98%DB%8C%D9%86-%D9%84%D8%A7%D9%86%DA%98-%D8%AA%D9%87%D8%B1%D8%A7%D9%86/availability?day=2024-01-17&time=13:00:00.000Z&partySize=4