"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import session from "express-session";
//import mongo from "connect-mongo";
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
//export const MongoStore = mongo(session);
exports.getDatabase = () => __awaiter(this, void 0, void 0, function* () {
    try {
        let connection = yield mongodb_1.MongoClient.connect(config_1.MONGO_LOCALHOST.URL);
        return connection.db(config_1.MONGO_LOCALHOST.DBNAME);
    }
    catch (error) {
        console.log("FAILED TO ACCESS DATABASE", error);
    }
});
