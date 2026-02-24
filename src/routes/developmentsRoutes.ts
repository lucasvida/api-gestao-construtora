import express from "express";
import { erroRoute } from "../middlewares/erroRoute.js";
import { createEmpreendimento, getEmpreendimentos } from "../controllers/developmentsControllers.js";
const developmentsRouter = express.Router();

developmentsRouter.route("/").get(getEmpreendimentos).post(createEmpreendimento);
developmentsRouter.all("/",erroRoute);

export default developmentsRouter;