import { db } from "../config/db.js";
import { Request, Response } from "express";

interface Empreendimento {
    id?: number;
    nome: string;
    status: string;
    status_andamento: string;
}

export const getEmpreendimentos = async (req: Request, res: Response) => {
    try {
        const result = await db.execute("SELECT * FROM empreendimentos");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching empreendimentos" });
    }
};

export const createEmpreendimento = async (req: Request, res: Response) => {
    try {
        const { nome, status, status_andamento }: Empreendimento = req.body;

        if (!nome || !status || !status_andamento) {
            return res.status(400).json({ message: "Missing required fields (nome, status, status_andamento)" });
        }

        await db.execute({
            sql: "INSERT INTO empreendimentos (nome, status, status_andamento) VALUES (?, ?, ?)",
            args: [nome, status, status_andamento],
        });

        res.status(201).json({ 
            message: "Empreendimento created successfully", 
            data: { nome, status, status_andamento } 
        });
    } catch (error: any) {
        res.status(500).json({ message: "Error creating empreendimento" });
    }
};