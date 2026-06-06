import { db } from "../config/database";

async function testConnection() {
  const result = await db.query("SELECT NOW()");
  console.log(result.rows[0]);
}

testConnection();
