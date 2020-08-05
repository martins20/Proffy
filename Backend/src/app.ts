import express from "express";

import routes from "./routes";

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.midlewares();
    this.routes();
  }

  midlewares(): void {
    this.app.use(express.json())
  }

  routes(): void {
    this.app.use(routes);
  }
}


export default new App().app