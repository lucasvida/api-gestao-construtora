import { describe, it, expect } from "vitest";
import { db } from  "../../src/config/db.js";

describe(
    "Database connection tests",
    () => {
        it("Should connect to the database", async () => {
            await db.execute("SELECT 1");
            expect(true).toBe(true);
        });
    }
);