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
const access_1 = require("../db/access");
const utils_1 = require("../utils");
class BaseRepository {
    constructor(database, collectionName) {
        this._database = database;
        this._collectionName = collectionName;
    }
    getCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            let database = yield access_1.getDatabase();
            return database.collection(this._collectionName);
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this._collection = yield this._database.collection(this._collectionName);
            const response = yield this._collection.insertOne(item);
            return !!response.result.ok;
        });
    }
    get(pagerOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let db = yield access_1.getDatabase();
            this._collection = yield db.collection(this._collectionName);
            try {
                let result = yield Promise.all([
                    this._collection.count(),
                    this._collection
                        .find({})
                        .limit(pagerOptions.limit)
                        .skip(pagerOptions.skip)
                        .sort(pagerOptions.sort)
                        .toArray()
                ]);
                return utils_1.RepositoryFormatResponse(result, pagerOptions);
            }
            catch (e) {
                console.log("FAILED TO EXEC REQUEST ->", e);
            }
        });
    }
}
exports.BaseRepository = BaseRepository;
