import { createClient, type Client} from "@libsql/client";
import env from "dotenv";

env.config();

export const db: Client = createClient({
      url: process.env.TURSO_DATABASE_URL as string,
      authToken: process.env.TURSO_AUTH_TOKEN as string,
});

export const validaConexao = async () => {
    try {
        await db.execute("SELECT 1");
        console.log("Conectado ao banco de dados com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
};