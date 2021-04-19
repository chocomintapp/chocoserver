import { appConfigService } from "../../common/config/app/config.module";
import { databasePostgresConfigService } from "../../common/config/database/postgres/config.module";
import { getTypeormMigrationConfig } from "../helpers/typeorm.helpers";

export = getTypeormMigrationConfig({
  type: appConfigService.database,
  host: databasePostgresConfigService.host,
  port: parseInt(databasePostgresConfigService.port),
  username: databasePostgresConfigService.username,
  password: databasePostgresConfigService.password,
  database: databasePostgresConfigService.database,
  ssl: appConfigService.isProduction,
});
