import express, { Express } from "express";
import env from "./env";

interface TServer {
  app: Express;
}

class Server implements TServer {
  public app;

  constructor() {
    this.app = express();
    console.log("Starting server...");
    this.init();
  }

  init(): void {
    this.app.listen(env.port, () => {
      console.log(`Listening on port ${env.port as number}`);
    });

    this.app.get("/", function (req, res) {
      res.send("Hello !!");
    });
  }
}

export default new Server().app;
