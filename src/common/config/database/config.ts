import { defaultConfig } from "../../helpers/env.helper";

export const databaseConfig = {
  host: process.env.DATABASE_HOST || defaultConfig.DATABASE_HOST,
  port: process.env.DATABASE_PORT || defaultConfig.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME || defaultConfig.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD || defaultConfig.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE || defaultConfig.DATABASE_DATABASE,
};
