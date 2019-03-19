import express from "express";
import placeRouter from "./resources/Place";

const apiRouter = express.Router();
apiRouter.use("/place", placeRouter);

export default apiRouter;