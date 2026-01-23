import express from "express";
import { erroRoute } from "../middlewares/erroRoute.js";
import { createEmpreendimento, getEmpreendimentos } from "../controllers/empreendimentosControllers.js";
const empreendimentosRouter = express.Router();

empreendimentosRouter.route("/").get(getEmpreendimentos).post(createEmpreendimento);
empreendimentosRouter.all("/",erroRoute);

export default empreendimentosRouter;