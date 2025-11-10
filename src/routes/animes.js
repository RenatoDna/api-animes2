
import express from "express";
const router = express.Router();


let animes = [{ id: 1, nome: "Naruto" }];



export function setAnimesStorage(storage) {
  animes = storage;
}

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = animes.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Anime não encontrado" });
  }

  animes.splice(index, 1);
  res.status(204).send();
});


export default router;
