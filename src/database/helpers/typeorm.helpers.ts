import { entitiePath, migrationsTableName, migrations, migrationsDir } from "../../common/constants/typeorm.constant";

export const getTypeormRuntimeConfig = (typeOrmConfig) => ({
  type: typeOrmConfig.type,
  host: typeOrmConfig.host,
  port: typeOrmConfig.port,
  username: typeOrmConfig.username,
  password: typeOrmConfig.password,
  database: typeOrmConfig.database,
  entities: [`src/${entitiePath}`],
  ssl: typeOrmConfig.ssl,
});

export const getTypeormMigrationConfig = (typeOrmConfig) => ({
  ...getTypeormRuntimeConfig(typeOrmConfig),
  entities: [`src/${entitiePath}`],
  migrationsTableName,
  migrations,
  cli: {
    migrationsDir,
  },
});
