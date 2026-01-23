import express from "express";
import { getClientes, createCliente } from "../controllers/clientesControllers.js";
import { erroRoute } from "../middlewares/erroRoute.js";

const clientesRouter = express.Router();

clientesRouter.route("/").get(getClientes).post(createCliente);
clientesRouter.all("/", erroRoute);

export default clientesRouter;