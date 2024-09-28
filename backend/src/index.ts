import express, { Request, Response } from "express";
import { readFile } from "fs/promises";
import { resolve } from "path";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/companies", async (req: Request, res: Response) => {
  const filePath = resolve(__dirname, "../db/data.json");
  const json = await readFile(filePath, "utf-8");
  res.json(JSON.parse(json));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
