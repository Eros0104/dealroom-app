import express from "express";
import serverless from "serverless-http";
import router from "../../src/routes";
import cors from "cors";

const api = express();

api.use("/api/", router);
api.use(cors());

export const handler = serverless(api);
