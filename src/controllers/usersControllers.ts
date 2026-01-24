import { Request, Response } from "express";
import { userRepository, User } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export const getUsers = userRepository.getAll;

export const createUser = async (req: Request, res: Response) => {
    try {
        const { nome, email, senha, role }: User = req.body;

        if (!nome || !email || !senha || !role) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        await userRepository.create({
            nome,
            email,
            senha: hashedPassword,
            role
        });

        res.status(201).json({
            message: "User created successfully",
            data: { nome, email }
        });
    } catch (error: any) {
        // Tratativa para erro de e-mail duplicado
        if (error.code === 'SQLITE_CONSTRAINT' || error.message?.includes("UNIQUE constraint failed: users.email")) {
            return res.status(409).json({ message: "User already exists" });
        }

        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" });
    }
};
