import app from "./app.js";
import chalk from "chalk";
import { validaConexao } from "./config/db.js";

await validaConexao();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(chalk.bold.bgGreen(` Server running on port ${PORT} `)) );
