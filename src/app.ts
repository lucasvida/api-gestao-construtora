import express from "express";
import helmet from "helmet";
import env from "dotenv";
import cors from "cors";
import mainRoute from "./routes/mainRoute.js";
import rateLimit from "express-rate-limit";

env.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors({origin: "*"}));

app.use(rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000", 10),
    max: parseInt(process.env.RATE_LIMIT_MAX || "100", 10),
    message: process.env.RATE_LIMIT_MESSAGE || "Muitas requisições feitas pelo seu IP, tente novamente mais tarde."
}));

app.use("/v1", mainRoute);

export default app;
