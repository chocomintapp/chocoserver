import { defaultEnv } from "../../helpers/env.helper";

export const appEnv = {
  env: process.env.APP_ENV || defaultEnv.APP_ENV,
  port: process.env.APP_PORT || defaultEnv.APP_PORT,
  database: process.env.APP_DATABASE || defaultEnv.APP_DATABASE,
};
