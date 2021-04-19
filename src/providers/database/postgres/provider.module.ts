import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { appEnvService } from "../../../config/env/app/env.module";
import { databasePostgresEnvService } from "../../../config/env/database/postgres/env.module";
import { getTypeormRuntimeConfig } from "../../../database/helpers/typeorm.helpers";

@Module({
  imports: [
    TypeOrmModule.forRoot(
      getTypeormRuntimeConfig({
        type: "postgres",
        host: databasePostgresEnvService.host,
        port: parseInt(databasePostgresEnvService.port),
        username: databasePostgresEnvService.username,
        password: databasePostgresEnvService.password,
        database: databasePostgresEnvService.database,
        ssl: appEnvService.isProduction,
      })
    ),
  ],
})
export class DatabasePostgresProviderModule {}
