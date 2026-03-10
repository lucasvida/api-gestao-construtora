import { describe, it, expect } from "vitest";
import env from "dotenv";

env.config();

const PORT = process.env.PORT || 3333;

describe("API Performance", () => {
  it("endpoint deve responder em menos de 300ms", async () => {
    const start = Date.now()
    await fetch(`http://localhost:${PORT}/clients`)
    const duration = Date.now() - start
    expect(duration).toBeLessThan(300)

  })

})