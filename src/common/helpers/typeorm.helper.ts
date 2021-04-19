import { entities, migrationsTableName, migrations, migrationsDir } from "../constants/typeorm.constant";

export const getTypeOrmConfig = ({ type, host, port, username, password, database, ssl, isMigrationBuild }) => {
  const config = {
    type,
    host,
    port,
    username,
    password,
    database,
    entities,
    ssl,
  };
  if (isMigrationBuild) {
    return {
      ...config,
      migrationsTableName,
      migrations,
      cli: {
        migrationsDir,
      },
    };
  } else {
    return config;
  }
};
