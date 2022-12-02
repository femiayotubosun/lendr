import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import routes from "@web/routes";
import { DbSource } from "./DbSource";

class ExpressConfig {
  app: express.Express;
  dbSource: DbSource;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.dbSource = new DbSource();
    this.connectDatabase();
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(helmet);
    this.app.use("/api/v1", routes);
    this.app.use(this.unmatchedRoutesHandler);
  }

  unmatchedRoutesHandler(_: Request, res: Response) {
    res.status(404).json({
      error: {
        name: "Error",
        status: 404,
        message: "Invalid Request",
        statusCode: 404,
      },
      message: "Invalid Request!",
    });
  }

  async connectDatabase() {
    await this.dbSource.connect();
  }
}

export default ExpressConfig;
