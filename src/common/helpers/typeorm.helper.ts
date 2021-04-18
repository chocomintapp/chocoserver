import { entities, migrationsTableName, migrations, migrationsDir } from '../constants/settings';

export const getTypeOrmConfig = ({ type, host, port, username, password, database, ssl }) => {
  return {
    type,
    host,
    port,
    username,
    password,
    database,
    entities,
    migrationsTableName,
    migrations,
    cli: {
      migrationsDir,
    },
    ssl,
  };
};
