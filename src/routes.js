import { Router } from "express";

const { request, response } = require("./app");

const routes = new Router();

routes.get("/", (request, response) =>
  response.status(200).json({ message: "Ola Mundo" }),
);

export default routes;
