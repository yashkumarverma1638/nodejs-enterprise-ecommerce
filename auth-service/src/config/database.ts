import { Pool } from "pg";

export const db = new Pool({
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "postgres",
  database: "postgres",
});

async function testConnection() {
  console.log("Connecting...");

  const result = await db.query("SELECT NOW()");

  console.log(result.rows);
}

testConnection();
