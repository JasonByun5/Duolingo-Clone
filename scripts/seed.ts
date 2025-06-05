import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!); // basically connects this place to the neon database
// @ts-ignore
const db = drizzle(sql, {schema});

const main = async () => {
    try{
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc:"/spain.png",
            },
            {
                id: 2,
                title: "Italian",
                imageSrc:"/italy.png",
            },
            {
                id: 3,
                title: "French",
                imageSrc:"/france.png",
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc:"/croatia.png",
            },
        ]);


        console.log("seeding finished")
    } catch (error){
        console.error(error);
        throw new Error("Failed to seed the database")
    }
};

main();