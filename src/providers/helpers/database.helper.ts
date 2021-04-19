import { appConfigService } from "../../common/config/app/config.module";
import { DatabasePostgresProviderModule } from "../database/postgres/provider.module";

export const getDatabaseProviderModule = () => {
  if (appConfigService.database == "postgres") {
    return DatabasePostgresProviderModule;
  }
};

export const DatabaseProviderModule = getDatabaseProviderModule();
