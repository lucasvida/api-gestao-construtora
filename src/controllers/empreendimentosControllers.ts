import { db } from "../config/db.js";
import { Request, Response } from "express";

interface Empreendimento {
    id?: number;
    nome: string;
    status: string;
    status_andamento: string;
    created_at?: Date;
}

export const getEmpreendimentos = async (req: Request, res: Response) => {
    try {
        const result = await db.execute("SELECT * FROM empreendimentos");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: "Error ao buscar empreendimentos" });
    }
};

export const createEmpreendimento = async (req: Request, res: Response) => {
    try {
        const { nome, status, status_andamento }: Empreendimento = req.body;

        if (!nome || !status || !status_andamento) {
            return res.status(400).json({ message: "Campos obrigatórios não informados (nome, status, status_andamento)" });
        }

        await db.execute({
            sql: "INSERT INTO empreendimentos (nome, status, status_andamento, created_at) VALUES (?, ?, ?, ?)",
            args: [nome, status, status_andamento, new Date()],
        });

        res.status(201).json({
            message: "Empreendimento criado com sucesso",
            data: { nome, status, status_andamento }
        });
    } catch (error: any) {
        res.status(500).json({ message: "Error ao criar empreendimento" });
    }
};