import {
  entitiyPath,
  migrationsTableName,
  migrationPath,
  migrationsDir,
} from "../../common/constants/typeorm.constant";

export const getTypeormConfig = (typeOrmConfig) => ({
  type: typeOrmConfig.type,
  host: typeOrmConfig.host,
  port: typeOrmConfig.port,
  username: typeOrmConfig.username,
  password: typeOrmConfig.password,
  database: typeOrmConfig.database,
  migrationsRun: typeOrmConfig.migrationsRun,
  migrationsTableName,
  migrations: [`${__dirname}/../../${migrationPath}`],
  cli: {
    migrationsDir,
  },
  entities: [`${__dirname}/../../${entitiyPath}`],
  ssl: typeOrmConfig.ssl,
});
