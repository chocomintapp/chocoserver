import * as Joi from "@hapi/joi";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { developmentEnv } from "../../common/helpers/env.development.helper";
import { AppConfigService } from "./config.service";
import configuration from "./configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string().valid("development", "production").default(developmentEnv.APP_ENV),
        APP_PORT: Joi.number().default(developmentEnv.APP_PORT),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
