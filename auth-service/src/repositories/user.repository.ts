import { db } from "../config/database";

export class UserRepository {
  async findByEmail(email: string) {
    const dbName = await db.query("SELECT current_database()");

    console.log("Current DB:", dbName.rows);

    const tables = await db.query(
      "SELECT tablename FROM pg_tables WHERE schemaname='public'",
    );

    console.log("Tables:", tables.rows);

    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    return result.rows[0];
  }

  async create(email: string, password: string) {
    const result = await db.query(
      `
      INSERT INTO users(email, password)
      VALUES($1, $2)
      RETURNING *
      `,
      [email, password],
    );

    return result.rows[0];
  }
}
