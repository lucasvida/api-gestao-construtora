import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../src/app.js";

describe("Acesso as Rotas", () => {
    it("Deve acessar a rota de usuários com sucesso", async () => {
        const response = await request(app).get("/v1/users");
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object); 
    });
});
