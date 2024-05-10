import express from "express";
import routes from "./routes";
import {resolve} from "node:path"
import './database'


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use('/product-file', express.static(resolve(__dirname,'..','uploads')),
    );
    // voce esta avisando toda aplicacao que sera usado json
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
