import { db } from "../config/database";

export class UserRepository {
  async findByEmail(email: string) {
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
