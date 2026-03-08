import { db } from "../config/db.js";

export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: string;
    created_at?: Date;
}

export const userRepository = {
    async getAll(): Promise<User[]> {
        const result = await db.execute(`SELECT * FROM users`);
        return result.rows as unknown as User[];
    },
    async findByEmail(email: string): Promise<User | null> {
        const result = await db.execute({
            sql: `SELECT * FROM users WHERE email = :email`,
            args: { email }
        });
        if (result.rows.length === 0) return null;
        return result.rows[0] as unknown as User;
    },
    async create(user: User): Promise<void> {
        await db.execute({
            sql: `INSERT INTO users (name, email, password, role, created_at) VALUES (:name, :email, :password, :role, :created_at)`,
            args: { name: user.name, email: user.email, password: user.password, role: user.role, created_at: new Date().toISOString() }
        });
    }
};