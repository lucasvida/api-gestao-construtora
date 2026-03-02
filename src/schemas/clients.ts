import { z } from "zod";

export const clientSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(11, "Phone must be at least 11 characters long"),
    cpf: z.string().min(11, "CPF must be at least 11 characters long"),
    street: z.string().min(3,"Street must be at least 3 characters long"),
    number: z.string().min(1, "Number must be at least 1 character long"),
    neighborhood: z.string().min(3, "Neighborhood must be at least 3 characters long"),
    city: z.string().min(3, "City must be at least 3 characters long"),
    state: z.string().min(2, "State must be at least 2 characters long"),
    zip_code: z.string().min(8, "Zip code must be at least 8 characters long"),
    developments_id: z.number().min(1, "Development ID is required")
});

export const clientUpdateSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").optional(),
    email: z.string().email("Invalid email").optional(),
    phone: z.string().min(11, "Phone must be at least 11 characters long").optional()
});