import * as fs from "fs";
import * as dotenv from "dotenv";
import { defaultEnvPath } from "../constants/env.constant";
dotenv.config();
export const defaultEnv = dotenv.parse(fs.readFileSync(defaultEnvPath));
