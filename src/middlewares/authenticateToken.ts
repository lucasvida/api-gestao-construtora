import { NextFunction, Request, Response } from "express";
import { API_MESSAGES } from "../helpers/apiMessages.js";
import { DecodedToken } from "../types/userTypes.js";
import jwt from "jsonwebtoken";

declare module "express" {
  interface Request {
    user?: DecodedToken;
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1]; // Bearer TOKEN
  if (!token) return res.status(API_MESSAGES.AUTH.FORBIDDEN.status).json(API_MESSAGES.AUTH.FORBIDDEN);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded as DecodedToken;
    next();
  } catch {
    return res.status(API_MESSAGES.AUTH.FORBIDDEN.status).json(API_MESSAGES.AUTH.FORBIDDEN);
  }
};