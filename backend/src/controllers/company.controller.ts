import { Request, Response } from "express";
import jsonParser from "../utils/json-parser";
import * as data from "../../db/data.json";

const containsName = (search: string, itemName: string) => {
  return itemName.toLowerCase().includes(search.toLowerCase());
};

const companyController = {
  getCompanies: async (req: Request, res: Response) => {
    const searchFilter = req.query.search as string;
    const json = JSON.stringify(data);
    const result = jsonParser.parse(json) as any;

    if (!!searchFilter) {
      const filteredItems = result.items.filter((i: any) =>
        containsName(searchFilter, i.name),
      );

      result.items = filteredItems;
    }

    res.status(200).header("Access-Control-Allow-Origin", "*").json(result);
  },
};

export default companyController;
