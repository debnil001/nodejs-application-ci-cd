const request = require("supertest");
const app = require("../src/app");

describe("User API", () => {
  it("should return empty users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
  });

  it("should create user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "Debnil" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Debnil");
  });
});