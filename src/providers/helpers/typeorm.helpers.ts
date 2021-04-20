import {
  entitiyPath,
  migrationsTableName,
  migrationPath,
  migrationsDir,
  seeds,
  factories,
} from "../../common/constants/typeorm.constant";

export const getTypeormConfig = (typeOrmConfig) => ({
  type: typeOrmConfig.type,
  host: typeOrmConfig.host,
  port: typeOrmConfig.port,
  username: typeOrmConfig.username,
  password: typeOrmConfig.password,
  database: typeOrmConfig.database,
  migrationsTableName,
  migrations: [`${__dirname}/../../${migrationPath}`],
  cli: {
    migrationsDir,
  },
  entities: [`${__dirname}/../../${entitiyPath}`],
  seeds,
  factories,
  ssl: typeOrmConfig.ssl,
});
