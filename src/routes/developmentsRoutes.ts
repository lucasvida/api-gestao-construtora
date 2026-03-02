import express from "express";
import { erroRoute } from "../middlewares/erroRoute.js";
import { createDevelopment, getDevelopments } from "../controllers/developmentsControllers.js";
const developmentsRouter = express.Router();

developmentsRouter.route("/").get(getDevelopments).post(createDevelopment);
developmentsRouter.all("/",erroRoute);

export default developmentsRouter;