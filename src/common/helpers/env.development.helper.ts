import * as fs from "fs";
import * as dotenv from "dotenv";
export const developmentEnv = dotenv.parse(fs.readFileSync(".development.env"));
