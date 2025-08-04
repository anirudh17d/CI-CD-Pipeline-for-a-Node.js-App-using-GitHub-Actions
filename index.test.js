// index.test.js
const request = require("supertest");
const app = require("./index");

test("GET / should return Hello CI/CD!", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("This will fail");
});
