import { defaultConfig } from "../../../helpers/env.helper";

export const databasePostgresConfig = {
  host: process.env.POSTGRES_HOST || defaultConfig.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || defaultConfig.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME || defaultConfig.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD || defaultConfig.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE || defaultConfig.POSTGRES_DATABASE,
};
