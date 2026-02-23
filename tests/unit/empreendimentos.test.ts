import { describe, it, expect } from "vitest";
import { db } from "../../src/config/db.js";

describe(
    "Buscar empreendimentos",
    () => {
        it("Deve buscar todos os empreendimentos", async () => {
            const empreendimentos = await db.execute("SELECT * FROM empreendimentos");
            expect(empreendimentos).toBeInstanceOf(Object);
        });
    }
);