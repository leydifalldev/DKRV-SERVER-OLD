import express from "express";
import productRouter from "./resources/Place";

const apiRouter = express.Router();
apiRouter.use("/place", productRouter);

export default apiRouter;