import { Request, Response } from "express";
import { loginSchema } from "../schemas/login.js";
import { API_MESSAGES } from "../helpers/apiMessages.js";
import { loginRepository } from "../repositories/loginRepository.js";
import { User } from "../types/userTypes.js";
import jwt from "jsonwebtoken";
import env from "dotenv";
import bcrypt from "bcrypt";

env.config();

export const getAuthorization = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const validation = loginSchema.safeParse({ email, password });
    if (!validation.success) {
        return res.status(API_MESSAGES.AUTH.LOGIN_ERROR.status).json(API_MESSAGES.AUTH.LOGIN_ERROR);
    }
    try {
        const user = await loginRepository.findByEmail(email) as unknown as User;

        if (!user) {
            return res.status(API_MESSAGES.AUTH.LOGIN_ERROR.status).json(API_MESSAGES.AUTH.LOGIN_ERROR);
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if (!isPasswordValid) {
            return res.status(API_MESSAGES.AUTH.LOGIN_ERROR.status).json(API_MESSAGES.AUTH.LOGIN_ERROR);
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN as any || "1h" });

        res.status(API_MESSAGES.AUTH.LOGIN_SUCCESS.status).json({ ...API_MESSAGES.AUTH.LOGIN_SUCCESS, token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(API_MESSAGES.AUTH.LOGIN_ERROR.status).json(API_MESSAGES.AUTH.LOGIN_ERROR);
    }
};