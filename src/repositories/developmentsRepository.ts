import { db } from "../config/db.js";
import { Development, DevelopmentWithClientCount } from "../types/developmentTypes.js";

export const developmentRepository = {
    async getAll(): Promise<DevelopmentWithClientCount[]> {
        const result = await db.execute({
            sql: `
                SELECT 
                    developments.*, 
                    COUNT(clients.id) as total_clients 
                FROM developments 
                LEFT JOIN clients ON developments.id = clients.developments_id 
                GROUP BY developments.id
            `
        });
        return result.rows as unknown as DevelopmentWithClientCount[];
    },

    async getById(id: number): Promise<DevelopmentWithClientCount | null> {
        const result = await db.execute({
            sql: `
                SELECT 
                    d.*,
                    COUNT(c.id) AS total_clients
                FROM developments d
                LEFT JOIN clients c ON d.id = c.developments_id
                WHERE d.id = ?
                GROUP BY d.id
            `,
            args: [id]
        });

        if (result.rows.length === 0) return null;
        return result.rows[0] as unknown as DevelopmentWithClientCount;
    },

    async create(data: Omit<Development, 'id' | 'created_at'>): Promise<Development> {
        const result = await db.execute({
            sql: `
                INSERT INTO developments (name, status, status_progress, created_at)
                VALUES (:name, :status, :status_progress, :created_at)
                RETURNING *
            `,
            args: { name: data.name, status: data.status, status_progress: data.status_progress, created_at: new Date().toISOString() }
        });

        return result.rows[0] as unknown as Development;
    }
};