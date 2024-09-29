import { Request, Response } from "express";
import jsonParser from "../utils/json-parser";
import * as data from "../../db/data.json";

const companyController = {
  getCompanies: async (req: Request, res: Response) => {
    const json = JSON.stringify(data);
    const result = jsonParser.parse(json);
    res.json(result);
  },
};

export default companyController;
