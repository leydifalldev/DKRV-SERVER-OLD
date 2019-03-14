import express from "express";
import { AddPlaceCtrl, GetPlaceCtrl } from "./place.controller";

const productRouter = express.Router();

productRouter
  .route("/")
  .post(AddPlaceCtrl)
  .get(GetPlaceCtrl);
  
export default productRouter;