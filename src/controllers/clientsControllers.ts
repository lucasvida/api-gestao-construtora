import { Request, Response } from "express";
import maskInfo from "../helpers/maskInfo.js";
import { clientSchema } from "../schemas/clients.js";
import { API_MESSAGES } from "../helpers/apiMessages.js";
import { ClientWithDevelopment } from "../types/clientsTypes.js";
import { clientRepository } from "../repositories/clientsRepository.js";


export const getClients = async (req: Request, res: Response) => {
    try {
        const result = await clientRepository.getClientsWithDevelopments();
        res.status(200).json(result.map((client: ClientWithDevelopment) => ({
            ...client, cpf: maskInfo.maskCpf(client.cpf), email: maskInfo.maskEmail(client.email), phone: maskInfo.maskPhone(client.phone)
        })));
    } catch (error) {
        console.error("Error fetching clients:", error);
        res.status(500).json(API_MESSAGES.CLIENTS.FETCH_ERROR);
    }
};

export const createClient = async (req: Request, res: Response) => {
    try {
        const { name, phone, email, cpf, zip_code, street, number, neighborhood, city, state, developments_id } = clientSchema.parse(req.body);
        await clientRepository.create({ name, phone, email, cpf, zip_code, street, number, neighborhood, city, state, developments_id });
        res.status(201).json({
            message: "Client created successfully",
            data: { name, email }
        });
    } catch (error: any) {
        if (error.name === "ZodError") {
            return res.status(400).json(API_MESSAGES.CLIENTS.INVALID_DATA);
        }

        if (error.code === 'SQLITE_CONSTRAINT' || error.message?.includes("UNIQUE constraint failed: clients.email")) {
            return res.status(409).json(API_MESSAGES.CLIENTS.ALREADY_EXISTS);
        }

        console.error("Error creating client:", error);
        res.status(500).json(API_MESSAGES.CLIENTS.CREATE_ERROR);
    }
};