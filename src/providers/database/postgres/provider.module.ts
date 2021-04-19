import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { appConfigService } from "../../../common/config/app/config.module";
import { databasePostgresConfigService } from "../../../common/config/database/postgres/config.module";
import { getTypeormRuntimeConfig } from "../../../database/helpers/typeorm.helpers";

@Module({
  imports: [
    TypeOrmModule.forRoot(
      getTypeormRuntimeConfig({
        type: "postgres",
        host: databasePostgresConfigService.host,
        port: parseInt(databasePostgresConfigService.port),
        username: databasePostgresConfigService.username,
        password: databasePostgresConfigService.password,
        database: databasePostgresConfigService.database,
        ssl: appConfigService.isProduction,
      })
    ),
  ],
})
export class DatabasePostgresProviderModule {}
