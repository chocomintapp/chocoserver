import { defaultEnv } from "../../../helpers/env.helper";

export const databasePostgresEnv = {
  host: process.env.POSTGRES_HOST || defaultEnv.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || defaultEnv.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME || defaultEnv.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD || defaultEnv.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE || defaultEnv.POSTGRES_DATABASE,
};
