import { entitiePath, migrationsTableName, migrations, migrationsDir } from "../../config/constants/typeorm.constant";

console.log(`${__dirname}${entitiePath}`);

export const getTypeormRuntimeConfig = (typeOrmConfig) => ({
  type: typeOrmConfig.type,
  host: typeOrmConfig.host,
  port: typeOrmConfig.port,
  username: typeOrmConfig.username,
  password: typeOrmConfig.password,
  database: typeOrmConfig.database,
  entities: [`dist/${entitiePath}`],
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
