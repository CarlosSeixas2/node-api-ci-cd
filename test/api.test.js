const request = require("supertest");
const app = require("../index");

let server;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll((done) => {
  server.close(done);
});

describe("Testes da API", () => {
  test("Deve responder com API funcionando", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "API funcionando!");
  });

  test("Deve somar dois números corretamente", async () => {
    const res = await request(app).post("/soma").send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("resultado", 8);
  });

  test("Deve retornar erro se os valores não forem números", async () => {
    const res = await request(app).post("/soma").send({ a: "abc", b: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error", "Os valores devem ser números");
  });
});
