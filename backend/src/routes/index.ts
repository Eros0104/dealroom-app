import companyRouter from "./company.route";
import express from "express";

const router = express.Router();

const routes = [
  {
    path: "/companies",
    route: companyRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
