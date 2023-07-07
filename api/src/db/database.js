import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const db = new pg.Pool({
	connectionString: process.env.POSTGRES_DB,
});
