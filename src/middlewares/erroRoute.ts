import { Request, Response, RequestHandler } from "express";

export const erroRoute: RequestHandler = (req : Request, res : Response) => {
    const method = req.method;
    res.status(405).json({message: `Method ${method} not allowed`});
};
