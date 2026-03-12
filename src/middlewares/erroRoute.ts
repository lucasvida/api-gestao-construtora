import { Request, Response, RequestHandler } from "express";
import { API_MESSAGES } from "../helpers/apiMessages.js"

export const erroRoute: RequestHandler = (req: Request, res: Response) => {
    const errorInfo = API_MESSAGES.ERROR.METHOD_NOT_ALLOWED(req.method);
    res.status(errorInfo.status).json(errorInfo);
};
