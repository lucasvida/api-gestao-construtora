import { describe, it, expect } from "vitest";
import { db } from  "../../src/config/db.js";

describe(
    "Testes de Conexão com Banco de Dados",
    () => {
        it("Deve conectar ao banco de dados", async () => {
            await db.execute("SELECT 1");
            expect(true).toBe(true);
        });
    }
);