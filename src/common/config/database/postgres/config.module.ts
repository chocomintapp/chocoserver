import { databasePostgresConfig } from "./config";
import { DatabasePostgresConfigService } from "./config.service";

export const databasePostgresConfigService = new DatabasePostgresConfigService(
  databasePostgresConfig.host,
  databasePostgresConfig.port,
  databasePostgresConfig.username,
  databasePostgresConfig.password,
  databasePostgresConfig.database
);
