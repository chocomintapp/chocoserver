export const ENTITY_FILE_PATH = "models/**/entities/*.entity{.js,.ts}";
export const MIGRATION_TABLE_NAME = "migration";
export const MIGRATION_DIR_NAME = "src/database/migrations";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class ConfigService {
  constructor(
    public appEnv,
    public appPort,
    public dbHost,
    public dbPort,
    public dbUsername,
    public dbPassword,
    public dbDatabase
  ) {}
  get isProduction() {
    return this.appEnv === "production";
  }
  get typeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      host: this.dbHost,
      port: this.dbPort,
      username: this.dbUsername,
      password: this.dbPassword,
      database: this.dbDatabase,
      entities: [`${__dirname}/../../models/**/entities/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/../../database/migrations/*{.js,.ts}`],
      cli: {
        migrationsDir: "src/database/migrations",
      },
      migrationsTableName: "migration",
      ssl: this.isProduction,
    };
  }
}
