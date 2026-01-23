import express from "express";
import { getUsers, createUser } from "../controllers/usersControllers.js";
import { erroRoute } from "../middlewares/erroRoute.js";

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers).post(createUser);
usersRouter.all("/",erroRoute);

export default usersRouter;