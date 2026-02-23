import app from "./app.js";
import { validaConexao } from "./config/db.js";

await validaConexao();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
