import { appEnvService } from "../config/env/app/env.module";
import { databasePostgresEnvService } from "../config/env/database/postgres/env.module";
import { getTypeormMigrationConfig } from "./helpers/typeorm.helpers";

export = getTypeormMigrationConfig({
  type: appEnvService.database,
  host: databasePostgresEnvService.host,
  port: parseInt(databasePostgresEnvService.port),
  username: databasePostgresEnvService.username,
  password: databasePostgresEnvService.password,
  database: databasePostgresEnvService.database,
  ssl: appEnvService.isProduction,
});
