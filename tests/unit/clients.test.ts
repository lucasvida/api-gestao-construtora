import { describe, it, expect } from "vitest";
import { db } from "../../src/config/db.js";

describe(
    "Find clients",
    () => {
        it("Should find all clients", async () => {
            const clients = await db.execute("SELECT * FROM clients");
            expect(clients).toBeInstanceOf(Object);
        });
    }
);