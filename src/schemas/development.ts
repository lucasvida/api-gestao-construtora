import { z } from "zod";

export const developmentSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    status: z.string().min(3, "Status must be at least 3 characters long"),
    status_progress: z.string().min(3, "Status progress must be at least 3 characters long"),
});

export const developmentUpdateSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").optional(),
    status: z.string().min(3, "Status must be at least 3 characters long").optional(),
    status_progress: z.string().min(3, "Status progress must be at least 3 characters long").optional()
});

export const developmentResponseSchema = z.object({
    name: z.string(),
    status: z.string(),
    status_progress: z.string(),
    total_clients: z.number()
});