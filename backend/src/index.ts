import express, { Request, Response } from "express";
import { readFile } from "fs/promises";
import { resolve } from "path";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const filePath = resolve(__dirname, "../db/data.json");
  const json = await readFile(filePath, "utf-8");
  res.json(JSON.parse(json));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
