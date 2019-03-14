"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const place_controller_1 = require("./place.controller");
const productRouter = express_1.default.Router();
productRouter
    .route("/")
    .post(place_controller_1.AddPlaceCtrl)
    .get(place_controller_1.GetPlaceCtrl);
exports.default = productRouter;
