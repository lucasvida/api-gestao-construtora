import { describe, it, expect } from "vitest";
import { db } from "../../src/config/db.js";

describe(
    "Buscar clientes",
    () => {
        it("Deve buscar todos os clientes", async () => {
            const clients = await db.execute("SELECT * FROM clientes");
            expect(clients).toBeInstanceOf(Object);
        });
    }
);