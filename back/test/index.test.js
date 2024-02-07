const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const character1 = { id: 1, name: "Rick"};
const character2 = { id: 2, name: "Morty"};

describe("Test de RUTAS", () => {
    decribe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image', () => {
            const response = (await.agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        });
        it("Si hay un error responde con status: 500", async () => {
            await agent.get('/rickandmorty/character/123456789').expect(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        it("Retorna objeto { acces: true } con credenciales correctas", async () => {
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=123456");
            expect(response.body.access).toBe(true);
        });
        it("Retorna objeto { acces: false } con credenciales incorrectas", async () => {
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=12345678");
            expect(response.body).toEqual({ access: true });
        });
    });

    describe ("POST /rickandmorty/fav",() => {
        it("Devuelve array con personaje enviado por body", async () => {
            const response = (await agent.post("/rickandmrty/fav")).setEncoding(character1);
            expect(response.body).toEqual([character1]);
        });
        it("Devuelve array con personaje enviado por body", async () => {
            const response = (await agent.post("/rickandmrty/fav")).setEncoding(character2);
            expect(response.body).toContainEqual([character1, character2]);
        });
    });

    describe("DELETE /rickandmorty/fav/:id", async () =>  {
        it("Devuelve array con personajes si no elimina nungún personaje", async () => {
            const response = await agent.delete("/rickandmorty/fav/15");
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
        });
        it("Devuelve array sin el personaje del id enviado", async () => {
            const response = await agent.delete("/rickandmorty/fav/15");
            expect(response.body).not.toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
        });
    });
})