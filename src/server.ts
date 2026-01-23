import express from "express";
import helmet from "helmet";
import env from "dotenv";
import cors from "cors";
import mainRoute from "./routes/mainRoute.js";
import {validaConexao} from "./config/db.js";


env.config();

const app = express();
const PORT = process.env.PORT || 3000;  

app.use(helmet());
app.use(express.json());
app.use(cors({origin: "*"}));

app.use("/v1", mainRoute);

await validaConexao();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});