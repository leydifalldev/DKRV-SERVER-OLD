//import session from "express-session";
//import mongo from "connect-mongo";
import { MongoClient, Db } from "mongodb";
import { MONGO_LAB, MONGO_LOCALHOST } from "./config";
//export const MongoStore = mongo(session);

export const getDatabase = async (): Promise<Db> => {
  try {
    let connection = await MongoClient.connect(MONGO_LOCALHOST.URL);
    return connection.db(MONGO_LOCALHOST.DBNAME);
  } catch (error) {
    console.log("FAILED TO ACCESS DATABASE", error);
  }
}