import { Request, Response } from "express";
import { userRepository, type User } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role }: User = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "Missing required fields (name, email, password, role)" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userRepository.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            message: "User created successfully",
            data: { name, email }
        });
    } catch (error: any) {
        // Handle duplicate email error
        if (error.code === 'SQLITE_CONSTRAINT' || error.message?.includes("UNIQUE constraint failed: users.email")) {
            return res.status(409).json({ message: "User already exists" });
        }

        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" });
    }
};
