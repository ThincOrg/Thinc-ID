import "dotenv/config";
import express from "express";
import type { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function start(): Promise<void> {
  const PORT: number = Number(process.env.PORT) ?? 5000;

  app.listen(PORT, (): void => {
    console.log(`=> Server listening on port ${PORT}`);
  });
}

start();
