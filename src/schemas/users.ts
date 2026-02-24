import { z } from "zod";

export const userSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

export const userUpdateSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").optional(),
    email: z.string().email("Email inválido").optional(),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").optional()
});