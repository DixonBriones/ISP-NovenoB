const request = require("supertest");
const app = require("../src/server");

const server = new app()
server.listen();

const baseUrl='http://127.0.0.1:3000/api/v1'

describe("POST /tutoria", () => {
    it("Prueba de que retorna 200", async () => {
    const newTutoria = {
        asignatura:"Matematicas"
    }
    const response = await request(baseUrl).post("/tutoria").send(newTutoria);
    expect(response.statusCode).toBe(200);
    });
});

describe("POST /tutoria", () => {
    it("Prueba de que retorna 200", async () => {
        const response = await request(baseUrl).get("/tutoria");
        expect(response.statusCode).toBe(200);
        });

    it("Prueba de que retorna tutorias", async () => {
        const response = await request(baseUrl).get("/tutoria");
        expect(response.body.tutorias.length >= 1).toBe(true);
    });
});