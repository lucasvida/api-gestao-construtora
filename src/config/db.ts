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
        console.log("Connected to the database successfully!");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
};