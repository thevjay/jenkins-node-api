const request = require('supertest');
const app = require("../src/app");

describe("Health Check API", () => {
    test("should return server healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.message)
            .toBe("Server is healthy");
    })
    test("should return hello message", async () => {
      const response = await request(app)
        .get("/hello");

      expect(response.statusCode).toBe(200);

      expect(response.body.message)
        .toBe("Hello from Jenkins CI!");
    });
});

describe("Users API", () => {
  test("should return all users", async () => {
    const response = await request(app)
      .get("/api/users");

    expect(response.statusCode).toBe(200);

    expect(response.body.success).toBe(true);

    expect(response.body.data).toHaveLength(2);
  });
});