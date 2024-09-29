import { Request, Response } from "express";
import { readFile } from "fs/promises";
import jsonParser from "../utils/json-parser";

const companyController = {
  getCompanies: async (req: Request, res: Response) => {
    const json = await readFile("db/data.json", "utf-8");
    const result = jsonParser.parse(json);
    res.json(result);
  },
};

export default companyController;
