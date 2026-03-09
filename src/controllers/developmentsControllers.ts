import { Request, Response } from "express";
import { API_MESSAGES } from "../helpers/apiMessages.js";
import { Development } from "../types/developmentTypes.js";
import { developmentSchema } from "../schemas/development.js";
import { developmentRepository } from "../repositories/developmentsRepository.js";

export const getDevelopments = async (req: Request, res: Response) => {
    try {
        const developments = await developmentRepository.getAll();
        res.status(200).json(developments);
    } catch (error) {
        res.status(500).json(API_MESSAGES.DEVELOPMENTS.FETCH_ERROR);
    }
};

export const createDevelopment = async (req: Request, res: Response) => {
    try {
        const { name, status, status_progress }: Development = developmentSchema.parse(req.body);
        
        await developmentRepository.create({ name, status, status_progress });
        res.status(201).json({
            message: "Development created successfully",
            data: { name, status, status_progress }
        });
    } catch (error: any) {
        res.status(500).json(API_MESSAGES.DEVELOPMENTS.CREATE_ERROR);
    }
};