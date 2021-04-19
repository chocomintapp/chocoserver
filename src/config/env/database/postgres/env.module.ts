import { databasePostgresEnv } from "./env";
import { DatabasePostgresEnvService } from "./env.service";

export const databasePostgresEnvService = new DatabasePostgresEnvService(
  databasePostgresEnv.host,
  databasePostgresEnv.port,
  databasePostgresEnv.username,
  databasePostgresEnv.password,
  databasePostgresEnv.database
);
