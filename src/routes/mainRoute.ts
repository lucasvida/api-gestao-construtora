import express from "express";
import usersRouter from "./usersRoutes.js";
import empreendimentosRouter from "./empreendimentosRoutes.js";
import clientesRouter from "./clientesRoutes.js";
import { erroRoute } from "../middlewares/erroRoute.js";

const mainRouter = express.Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/empreendimentos", empreendimentosRouter);
mainRouter.use("/clientes", clientesRouter);
mainRouter.all("/", erroRoute);

export default mainRouter;