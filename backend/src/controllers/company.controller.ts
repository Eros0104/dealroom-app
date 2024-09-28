import { Request, Response } from "express";
import { readFile } from "fs/promises";
import { resolve } from "path";

const companyController = {
  getCompanies: async (req: Request, res: Response) => {
    const filePath = resolve(__dirname, "../../db/data.json");
    const json = await readFile(filePath, "utf-8");
    res.json(JSON.parse(json));
  },
};

export default companyController;
