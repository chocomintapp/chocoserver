import { config } from "./config";
import { ConfigService } from "./config.service";

export const configService = new ConfigService(
  config.appEnv,
  config.appPort,
  config.dbHost,
  config.dbPort,
  config.dbUsername,
  config.dbPassword,
  config.dbDatabase
);
