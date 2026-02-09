import { db } from "../config/db.js";

export interface User {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    role: string;
    created_at?: Date;
}

export const userRepository = {
    async getAll(): Promise<User[]> {
        const result = await db.execute("SELECT * FROM users");
        return result.rows as unknown as User[];
    },
    async findByEmail(email: string): Promise<User | null> {
        const result = await db.execute({
            sql: "SELECT * FROM users WHERE email = ?",
            args: [email]
        });
        if (result.rows.length === 0) return null;
        return result.rows[0] as unknown as User;
    },
    async create(user: User): Promise<void> {
        await db.execute({
            sql: "INSERT INTO users (nome, email, senha, role, created_at) VALUES (?, ?, ?, ?, ?)",
            args: [user.nome, user.email, user.senha, user.role, new Date().toISOString()]
        });
    }
};