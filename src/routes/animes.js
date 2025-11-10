
import express from 'express';
const router = express.Router();


let animes = [
  // { id: '1', title: 'Naruto' }, ...
];

export function setAnimesStorage(storage) {
  animes = storage;
}

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = animes.findIndex(a => String(a.id) === String(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Anime not found' });
  }
  animes.splice(index, 1);
  return res.status(204).send();
});

export default router;
