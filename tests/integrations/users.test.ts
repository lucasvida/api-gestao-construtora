import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../src/app.js";
import env from "dotenv";
import jwt from "jsonwebtoken";

env.config();

describe("Access to routes", () => {
    it("Should access the users route successfully", async () => {
        const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
        const response = await request(app).get("/v1/users").set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});
