import express, { Application } from "express";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";
import expressValidator from "express-validator";
import apiRouter from "./api.routes";
import config from "../config";

const app: Application = express();

app.set("port", config.development.port);
app.use(compression());
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use("/assets", express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use("/api", apiRouter);

export default app;
