import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { DatabasePostgresConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { defaultEnv } from '../../../common/helpers/env.helper';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().default(defaultEnv.POSTGRES_HOST),
        POSTGRES_PORT: Joi.number().default(defaultEnv.POSTGRES_PORT),
        POSTGRES_USER: Joi.string().default(defaultEnv.POSTGRES_USER),
        POSTGRES_PASSWORD: Joi.string().default(defaultEnv.POSTGRES_PASSWORD),
        POSTGRES_DATABASE: Joi.string().default(defaultEnv.POSTGRES_DATABASE),
      }),
    }),
  ],
  providers: [ConfigService, DatabasePostgresConfigService],
  exports: [ConfigService, DatabasePostgresConfigService],
})
export class DatabasePostgresConfigModule {}
