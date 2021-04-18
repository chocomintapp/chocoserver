import * as Joi from "@hapi/joi";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { developmentEnv } from "../../../common/helpers/env.development.helper";
import { DatabasePostgresConfigService } from "./config.service";
import configuration from "./configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().default(developmentEnv.POSTGRES_HOST),
        POSTGRES_PORT: Joi.number().default(developmentEnv.POSTGRES_PORT),
        POSTGRES_USER: Joi.string().default(developmentEnv.POSTGRES_USER),
        POSTGRES_PASSWORD: Joi.string().default(developmentEnv.POSTGRES_PASSWORD),
        POSTGRES_DATABASE: Joi.string().default(developmentEnv.POSTGRES_DATABASE),
      }),
    }),
  ],
  providers: [ConfigService, DatabasePostgresConfigService],
  exports: [ConfigService, DatabasePostgresConfigService],
})
export class DatabasePostgresConfigModule {}
