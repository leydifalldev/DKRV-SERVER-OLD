"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_validator_1 = __importDefault(require("express-validator"));
const api_routes_1 = __importDefault(require("./api.routes"));
const config_1 = __importDefault(require("../config"));
const app = express_1.default();
app.set("port", config_1.default.development.port);
app.use(compression_1.default());
app.use(express_1.default.static('public'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(body_parser_1.default.json());
app.use("/assets", express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_validator_1.default());
app.use("/api", api_routes_1.default);
exports.default = app;
