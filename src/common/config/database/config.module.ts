import { databaseConfig } from "./config";
import { DatabaseConfigService } from "./config.service";

export const databaseConfigService = new DatabaseConfigService(
  databaseConfig.host,
  databaseConfig.port,
  databaseConfig.username,
  databaseConfig.password,
  databaseConfig.database
);
