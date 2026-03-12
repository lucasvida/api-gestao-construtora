import express from "express";
import { getAuthorization } from "../controllers/loginControllers.js";
import { erroRoute } from "../middlewares/erroRoute.js";

const loginRouter = express.Router();

loginRouter.route("/").post(getAuthorization);
loginRouter.all("/", erroRoute);

export default loginRouter;