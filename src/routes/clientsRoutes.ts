import express from "express";
import { getClients, createClient } from "../controllers/clientsControllers.js";
import { erroRoute } from "../middlewares/erroRoute.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const clientesRouter = express.Router();

clientesRouter.route("/").get(authenticateToken, getClients).post(authenticateToken, createClient);
clientesRouter.all("/", erroRoute);

export default clientesRouter;