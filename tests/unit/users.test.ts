import { describe, it, expect, vi, afterEach } from "vitest";
import { db } from "../../src/config/db.js";
const baseUrl = "http://localhost:3333";

describe(
    "Find users",
    () => {
        it("Should find all users", async () => {
            const users = await db.execute("SELECT * FROM users");
            expect(users).toBeInstanceOf(Object);
        });
    }
);

describe(
    "Add user",
    () => {
        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("Should add a simulated user", async () => {
            const mockExecute = vi.spyOn(db, "execute").mockResolvedValue({
                rows: [], 
                columns: [], 
                rowsAffected: 1, 
                lastInsertRowid: 1n 
            } as any);

            const user = await db.execute("INSERT INTO users (nome, email, senha) VALUES ('Lucas', 'lucas@email.com', '123456')");
            expect(user).toBeInstanceOf(Object);
            expect(mockExecute).toHaveBeenCalledTimes(1);
        });
    }
);

describe(
    "Delete user",
    () => {
        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("Should delete a simulated user", async () => {
            const mockExecute = vi.spyOn(db, "execute").mockResolvedValue({
                rows: [], 
                columns: [], 
                rowsAffected: 1, 
                lastInsertRowid: 1n 
            } as any);

            const user = await db.execute("DELETE FROM users WHERE id = 1");
            expect(user).toBeInstanceOf(Object);
            expect(mockExecute).toHaveBeenCalledTimes(1);
        });
    }
);

describe(
    "Update user",
    () => {
        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("Should update a simulated user", async () => {
            const mockExecute = vi.spyOn(db, "execute").mockResolvedValue({
                rows: [], 
                columns: [], 
                rowsAffected: 1, 
                lastInsertRowid: 1n 
            } as any);

            const user = await db.execute("UPDATE users SET nome = 'Lucas' WHERE id = 1");
            expect(user).toBeInstanceOf(Object);
            expect(mockExecute).toHaveBeenCalledTimes(1);
        });
    }
);