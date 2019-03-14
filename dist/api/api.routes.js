"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Place_1 = __importDefault(require("./resources/Place"));
const apiRouter = express_1.default.Router();
apiRouter.use("/place", Place_1.default);
exports.default = apiRouter;
