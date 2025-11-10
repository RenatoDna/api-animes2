
import express from "express";
import animesRouter from "./routes/animes.js";

const app = express();
app.use(express.json());

app.use("/animes", animesRouter);

export default app;
