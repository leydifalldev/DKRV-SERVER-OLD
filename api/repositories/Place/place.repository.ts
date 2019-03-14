import { Db } from "mongodb";
import { BaseRepository } from "../base.repository";
import { Place } from "../../defs/Place";

export class PlaceRepository extends BaseRepository<Place>  {
  constructor(database: Db) {
    super(database, 'place');
  }
}