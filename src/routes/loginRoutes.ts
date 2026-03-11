import express from "express";
import { getAuthorization } from "../controllers/loginControllers.js";

const loginRouter = express.Router();

loginRouter.post("/",getAuthorization);

export default loginRouter;