import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
// @ts-ignore
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

export const handler = serverless(api);
