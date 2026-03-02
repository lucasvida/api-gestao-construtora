import express from "express";
import { getClients, createClient } from "../controllers/clientsControllers.js";
import { erroRoute } from "../middlewares/erroRoute.js";

const clientesRouter = express.Router();

clientesRouter.route("/").get(getClients).post(createClient);
clientesRouter.all("/", erroRoute);

export default clientesRouter;