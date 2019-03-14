"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../base.repository");
class PlaceRepository extends base_repository_1.BaseRepository {
    constructor(database) {
        super(database, 'place');
    }
}
exports.PlaceRepository = PlaceRepository;
