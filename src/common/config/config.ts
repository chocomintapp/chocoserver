import * as fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

export const defaultConfig = dotenv.parse(fs.readFileSync(".development.env"));

export const config = {
  appEnv: process.env.APP_ENV || defaultConfig.APP_ENV,
  appPort: process.env.APP_PORT || defaultConfig.APP_PORT,
  dbHost: process.env.DB_HOST || defaultConfig.DB_HOST,
  dbPort: process.env.DB_PORT || defaultConfig.DB_PORT,
  dbUsername: process.env.DB_USERNAME || defaultConfig.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD || defaultConfig.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE || defaultConfig.DB_DATABASE,
};
