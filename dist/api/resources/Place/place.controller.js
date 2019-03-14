"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Place_1 = __importDefault(require("../../services/Place"));
const place_model_1 = require("../../models/place.model");
const utils_1 = require("../../utils");
exports.AddPlaceCtrl = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { name, address, phone, step } = req.body;
        let place = new place_model_1.Place(name, address, phone, step);
        let response = yield Place_1.default.add(place);
        res.status(response.httpStatus).json(response);
    }
    catch (e) {
        console.log("ERROR", e);
        res.status(500).json(e);
    }
});
exports.GetPlaceCtrl = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let serviceResponse = yield Place_1.default.getList(req.query);
        let response = utils_1.Pager(serviceResponse.results);
        res.status(serviceResponse.httpStatus).json(response);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
