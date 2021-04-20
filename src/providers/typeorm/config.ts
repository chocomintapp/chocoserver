import { appConfigService } from "../../common/config/app/config.module";
import { databaseConfigService } from "../../common/config/database/config.module";
import { getTypeormConfig } from "../helpers/typeorm.helpers";

export = getTypeormConfig({
  type: appConfigService.database,
  host: databaseConfigService.host,
  port: parseInt(databaseConfigService.port),
  username: databaseConfigService.username,
  password: databaseConfigService.password,
  database: databaseConfigService.database,
  ssl: appConfigService.isProduction,
});
