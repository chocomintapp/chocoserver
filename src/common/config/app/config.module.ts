import { appConfig } from "./config";
import { AppConfigService } from "./config.service";

export const appConfigService = new AppConfigService(
  appConfig.env,
  appConfig.port,
  appConfig.database,
  appConfig.migrationRun
);
