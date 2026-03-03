import { db } from "../config/db.js";
import { Request, Response } from "express";
import { API_MESSAGES } from "../helpers/apiMessages.js";

interface Development {
    id?: number;
    name: string;
    status: string;
    status_progress: string;
    created_at?: Date;
}

export const getDevelopments = async (req: Request, res: Response) => {
    try {
        const result = await db.execute("SELECT developments.*, COUNT(clients.id) as total_clients FROM developments LEFT JOIN clients ON developments.id = clients.developments_id GROUP BY developments.id");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json(API_MESSAGES.DEVELOPMENTS.FETCH_ERROR);
    }
};

export const createDevelopment = async (req: Request, res: Response) => {
    try {
        const { name, status, status_progress }: Development = req.body;

        if (!name || !status || !status_progress) {
            return res.status(400).json(API_MESSAGES.DEVELOPMENTS.INVALID_DATA);
        }

        await db.execute({
            sql: "INSERT INTO developments (name, status, status_progress, created_at) VALUES (?, ?, ?, ?)",
            args: [name, status, status_progress, new Date().toISOString()],
        });

        res.status(201).json({
            message: "Development created successfully",
            data: { name, status, status_progress }
        });
    } catch (error: any) {
        res.status(500).json(API_MESSAGES.DEVELOPMENTS.CREATE_ERROR);
    }
};