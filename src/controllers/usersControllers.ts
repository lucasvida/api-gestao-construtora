import { Request, Response } from "express";
import { userRepository, type User } from "../repositories/userRepository.js";
import { userResponseSchema, userSchema } from "../schemas/users.js";
import { API_MESSAGES } from "../helpers/apiMessages.js";
import bcrypt from "bcrypt";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.getAll();
        const safeUsers = users.map(user => userResponseSchema.parse(user));    
        res.status(200).json(safeUsers);
    } catch (error) {
        res.status(500).json(API_MESSAGES.USERS.FETCH_ERROR);
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = userSchema.parse(req.body);

        const hashedPassword = await bcrypt.hash(password, 10);

        const finalRole = role || "user";

        await userRepository.create({
            name,
            email,
            password: hashedPassword,
            role: finalRole
        });

        res.status(201).json({
            message: "User created successfully",
            data: userResponseSchema.parse({ name, email })
        });
    } catch (error: any) {
        if (error.name === "ZodError") {
            return res.status(400).json({ 
                message: API_MESSAGES.USERS.INVALID_DATA.message, 
                errors: (error.issues || []).map((e: any) => e.message) 
            });
        }
        if (error.code === 'SQLITE_CONSTRAINT' || error.message?.includes("UNIQUE constraint failed: users.email")) {
            return res.status(409).json(API_MESSAGES.USERS.ALREADY_EXISTS);
        }

        console.error("Error creating user:", error);
        res.status(500).json(API_MESSAGES.USERS.CREATE_ERROR);
    }
};
