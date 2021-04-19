import { defaultConfig } from "../../helpers/env.helper";

export const appConfig = {
  env: process.env.APP_ENV || defaultConfig.APP_ENV,
  port: process.env.APP_PORT || defaultConfig.APP_PORT,
  database: process.env.APP_DATABASE || defaultConfig.APP_DATABASE,
  migrationRun: process.env.APP_MIGRATION_RUN || defaultConfig.APP_MIGRATION_RUN,
};
