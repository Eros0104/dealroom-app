import express from "express";
import { companyController } from "../controllers";

const router = express.Router();

router.get("/", companyController.getCompanies);

export default router;
