import {db} from "../config/db.js";
import { Request, Response } from "express";

interface User {
    nome: string;
    email: string;
    senha: string;
    role: string;
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await db.execute("SELECT * FROM users");
    const data = users.rows as object[];
    res.status(200).json(data);
};

export const createUser = async (req: Request, res: Response) => {
    try{
        const { nome, email, senha, role } : User = req.body;
    if (!nome || !email || !senha || !role) {
        return res.status(400).json({message: "Missing required fields"});
    }
    const users = await db.execute({
        sql: "INSERT INTO users (nome, email, senha, role) VALUES ($1, $2, $3, $4)",
        args: [nome, email, senha, role],
    });
    res.status(201).json({message: "User created successfully", data:{nome, email}});
    } catch (error: any) { 
        if (error.code === 'SQLITE_CONSTRAINT' || error.message?.includes("UNIQUE constraint failed: users.email")) {
            return res.status(409).json({ message: "User already exists" });
        }
        res.status(500).json({ message: "Error creating user" });
    }
};
