import { drizzle } from "drizzle-orm/node-postgres";
const db = drizzle(process.env.DATABASE_URL);

const { Pool } = require("pg");
require("dotenv").config();

// Create a PG pool and export it for use in controllers.
// Using a plain Pool keeps this module CommonJS and simple for the rest of the project.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
