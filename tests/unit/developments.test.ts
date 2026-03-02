import { describe, it, expect } from "vitest";
import { db } from "../../src/config/db.js";

describe(
    "Find developments",
    () => {
        it("Should find all developments", async () => {
            const developments = await db.execute("SELECT * FROM developments");
            expect(developments).toBeInstanceOf(Object);
        });
    }
);