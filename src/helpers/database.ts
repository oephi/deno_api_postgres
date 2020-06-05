import { Client } from "https://deno.land/x/postgres/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import { dbCreds } from "./database_config.ts";

const database = new Client(dbCreds);

await database.connect();

export default database;
