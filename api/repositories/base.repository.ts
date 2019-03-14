import { IWrite } from "./base.repository.interfaces";
import { Db, Collection, InsertOneWriteOpResult } from "mongodb";
import { getDatabase } from "../db/access";
import {
    RepositoryResponse,
    PagerRequestOptions
} from "../defs";
import { RepositoryFormatResponse } from "../utils";

export abstract class BaseRepository<T> implements IWrite<T> {
    public _collection: Collection;
    private _database: Db;
    protected _collectionName: string;

    constructor(database: Db, collectionName: string) {
        this._database = database;
        this._collectionName = collectionName;
    }

    async getCollection() {
        let database = await getDatabase();
        return database.collection(this._collectionName);
    }

    async create(item: T): Promise<boolean> {
        this._collection = await this._database.collection(this._collectionName);
        const response: InsertOneWriteOpResult = await this._collection.insertOne(item);
        return !!response.result.ok;
    }

    async get(pagerOptions: PagerRequestOptions): Promise<RepositoryResponse> {
        let db = await getDatabase();
        this._collection = await db.collection(this._collectionName);
        try {
            let result = await Promise.all([
                this._collection.count(),
                this._collection
                    .find({})
                    .limit(pagerOptions.limit)
                    .skip(pagerOptions.skip)
                    .sort(pagerOptions.sort)
                    .toArray()])

            return RepositoryFormatResponse(result, pagerOptions);

        } catch (e) {
            console.log("FAILED TO EXEC REQUEST ->", e);
        }
    }
}