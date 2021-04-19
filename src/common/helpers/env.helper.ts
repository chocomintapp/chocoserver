import * as fs from "fs";
import * as dotenv from "dotenv";
import { defaultConfigPath } from "../constants/env.constant";
dotenv.config();
export const defaultConfig = dotenv.parse(fs.readFileSync(defaultConfigPath));
