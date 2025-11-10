
import request from "supertest";
import app from "../src/app.js";
import { setAnimesStorage } from "../src/routes/animes.js";

describe("DELETE /animes/:id", () => {
  beforeEach(() => {

    setAnimesStorage([
      { id: "1", title: "Anime 1" },
      { id: "2", title: "Anime 2" },
    ]);
  });

  test("should return 404 when anime does not exist", async () => {
    const res = await request(app).delete("/animes/999");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Anime not found");
  });

  test("should delete existing anime and return 204", async () => {
    const res = await request(app).delete("/animes/1");
    expect(res.status).toBe(204);

    const res2 = await request(app).delete("/animes/1");
    expect(res2.status).toBe(404);
  });
});
