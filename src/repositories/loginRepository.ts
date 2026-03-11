import { db } from "../config/db.js";

export const loginRepository = {
    async findByEmail(email: string) {
        const result = await db.execute({
            sql: `SELECT * FROM users WHERE email = :email`,
            args: { email }
        });
        return result.rows[0];
    }
};