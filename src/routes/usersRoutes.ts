import express from "express";
import { getUsers, createUser } from "../controllers/usersControllers.js";
import { erroRoute } from "../middlewares/erroRoute.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const usersRouter = express.Router();

usersRouter.route("/").get(authenticateToken, getUsers).post(authenticateToken, createUser);
usersRouter.all("/", erroRoute);

export default usersRouter;