import { MongoClient } from "mongodb";
import { CharacterModel, dniModel } from "../../types.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
    throw new Error("Please provide a MONGO_URL");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();

console.info("Connected to MongoDB");

const mongoDB = mongoClient.db("practicaMiddleware");
const DniCollection = mongoDB.collection<dniModel>(
    "dni",
);
const CharacterFavCollection = mongoDB.collection<CharacterModel>(
    "characterFav",
);
export { DniCollection, CharacterFavCollection };