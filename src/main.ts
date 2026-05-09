import express from "express";
import type { Express } from "express";

const app: Express = express();

async function start(): Promise<void> {
  app.listen(1000, (): void => {
    console.log(`=> App listening on port 1000`);
  });
}

start();
