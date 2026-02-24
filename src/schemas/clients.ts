import { z } from "zod";

export const clientSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido"),
    telefone: z.string().min(11, "O telefone deve ter pelo menos 11 caracteres"),
    cpf: z.string().min(11, "O CPF deve ter pelo menos 11 caracteres"),
    rua: z.string().min(3,"A rua deve ter pelo menos 3 caracteres"),
    numero: z.string().min(1, "O número deve ter pelo menos 1 caractere"),
    bairro: z.string().min(3, "O bairro deve ter pelo menos 3 caracteres"),
    cidade: z.string().min(3, "A cidade deve ter pelo menos 3 caracteres"),
    estado: z.string().min(2, "O estado deve ter pelo menos 2 caracteres"),
    cep: z.string().min(8, "O CEP deve ter pelo menos 8 caracteres"),
    developments_id: z.number().min(1, "O desenvolvimento deve ter pelo menos 1 caractere")
});

export const clientUpdateSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").optional(),
    email: z.string().email("Email inválido").optional(),
    telefone: z.string().min(11, "O telefone deve ter pelo menos 11 caracteres").optional()
});