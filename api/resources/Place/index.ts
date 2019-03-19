import express from "express";
import { AddPlaceCtrl, GetPlaceCtrl } from "./place.controller";

const placeRouter = express.Router();

placeRouter
  .route("/")
  .post(AddPlaceCtrl)
  .get(GetPlaceCtrl);

export default placeRouter;