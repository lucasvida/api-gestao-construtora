import express from "express";
import usersRouter from "./usersRoutes.js";
import developmentsRouter from "./developmentsRoutes.js";
import clientsRouter from "./clientsRoutes.js";
import loginRouter from "./loginRoutes.js";
import { erroRoute } from "../middlewares/erroRoute.js";

const mainRouter = express.Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/developments", developmentsRouter);
mainRouter.use("/clients", clientsRouter);
mainRouter.use("/login", loginRouter);
mainRouter.all("/", erroRoute);

export default mainRouter;