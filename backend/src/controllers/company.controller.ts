import { Request, Response } from "express";
import { readFile } from "fs/promises";
import { resolve } from "path";
import jsonParser from "../utils/json-parser";

const companyController = {
  getCompanies: async (req: Request, res: Response) => {
    const filePath = resolve(__dirname, "../../db/data.json");
    const json = await readFile(filePath, "utf-8");
    const result = jsonParser.parse(json);
    res.json(result);
  },
};

export default companyController;
