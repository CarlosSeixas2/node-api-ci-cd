const request = require("supertest");
const app = require("../index");

describe("Testes da API", () => {
  test("Deve responder com API funcionando", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("API funcionando!");
  });

  test("Deve somar dois números corretamente", async () => {
    const res = await request(app).post("/soma").send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(8);
  });

  test("Deve retornar erro se os valores não forem números", async () => {
    const res = await request(app).post("/soma").send({ a: "x", b: 3 });
    expect(res.statusCode).toBe(400);
  });
});
