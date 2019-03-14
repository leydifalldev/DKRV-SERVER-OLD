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
const joi_1 = __importDefault(require("joi"));
const access_1 = require("../../db/access");
const repositories_1 = require("../../repositories");
const validator_1 = require("./validator");
const utils_1 = require("../../utils");
class PlaceService {
    getRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            let databaseContext = yield access_1.getDatabase();
            let repository = new repositories_1.PlaceRepository(databaseContext);
            return repository;
        });
    }
    add(place) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultValidation = joi_1.default.validate(place, validator_1.placeSchema);
            let response;
            if (resultValidation.error) {
                response = {
                    httpStatus: 400,
                    error: resultValidation.error.details[0],
                    results: null,
                };
                return response;
            }
            let repository = yield this.getRepository();
            let results = yield repository.create(resultValidation.value);
            response = {
                httpStatus: 200,
                error: null,
                results: resultValidation.value
            };
            return response;
        });
    }
    getList(pageQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            let repositoryParams = utils_1.PagerFormatRequest(pageQuery);
            let repository = yield this.getRepository();
            let result = yield repository.get(repositoryParams);
            return {
                httpStatus: 200,
                results: result
            };
        });
    }
}
exports.default = new PlaceService();
