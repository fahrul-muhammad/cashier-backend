import { Pool } from "pg";

class AuthRepository {
  constructor(private db: Pool) {}

  createUser = async (username: string, email: string, password_hash: string) => {
    const q = `
      INSERT INTO cashier.users (username, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, username, email;
    `;
    const r = await this.db.query(q, [username, email, password_hash]);
    return r.rows[0];
  };

  findByEmail = async (email: string) => {
    const q = `SELECT * FROM cashier.users WHERE email = $1`;
    const r = await this.db.query(q, [email]);
    return r.rows[0];
  };
}

export default AuthRepository;
