"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.placeSchema = joi_1.default.object().keys({
    step: joi_1.default.number().required(),
    ref: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    //schedule: Joi.array(),
    address: joi_1.default.string().required(),
    phone: joi_1.default.string().min(9).max(13).required(),
    notation: joi_1.default.number()
});
