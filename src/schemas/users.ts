import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role: z.string().optional()
});

export const userUpdateSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").optional(),
    email: z.string().email("Invalid email").optional(),
    password: z.string().min(6, "Password must be at least 6 characters long").optional()
});

export const userResponseSchema = z.object({
    name: z.string(),
    email: z.string(),
    role: z.string().optional()
});