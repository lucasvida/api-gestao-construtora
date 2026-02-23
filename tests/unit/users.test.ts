import { describe, it, expect, vi, afterEach } from "vitest";
import { db } from "../../src/config/db.js";
const baseUrl = "http://localhost:3333";

describe(
    "Buscar usuários",
    () => {
        it("Deve buscar todos os usuários", async () => {
            const users = await db.execute("SELECT * FROM users");
            expect(users).toBeInstanceOf(Object);
        });
    }
);

describe(
    "Adicionar usuário",
    () => {
        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("Deve adicionar um usuário simulado", async () => {
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
    "Deletar usuário",
    () => {
        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("Deve deletar um usuário simulado", async () => {
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
    "Atualizar usuário",
    () => {
        afterEach(() => {
            vi.restoreAllMocks();
        });

        it("Deve atualizar um usuário simulado", async () => {
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