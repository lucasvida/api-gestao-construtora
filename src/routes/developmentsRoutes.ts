import express from "express";
import { erroRoute } from "../middlewares/erroRoute.js";
import { createDevelopment, getDevelopments } from "../controllers/developmentsControllers.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
const developmentsRouter = express.Router();

developmentsRouter.route("/").get(authenticateToken, getDevelopments).post(authenticateToken, createDevelopment);
developmentsRouter.all("/",erroRoute);

export default developmentsRouter;