import request from "supertest";
import app from "../src/app.js";

describe("DELETE /animes/:id", () => {
  it("Deve retornar 404 se o anime não existir", async () => {
    const res = await request(app).delete("/animes/999");
    expect(res.status).toBe(404);
  });

  it("Deve remover um anime existente e retornar 204", async () => {
    // Cria um anime antes de deletar
    const novoAnime = { id: 1, nome: "Naruto", genero: "Ação" };
    await request(app).post("/animes").send(novoAnime);

    // Agora deleta o anime criado
    const del = await request(app).delete(`/animes/${novoAnime.id}`);
    expect(del.status).toBe(204);
  });
});
