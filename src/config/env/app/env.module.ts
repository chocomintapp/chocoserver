import { appEnv } from "./env";
import { AppEnvService } from "./env.service";

export const appEnvService = new AppEnvService(appEnv.env, appEnv.port, appEnv.database);
