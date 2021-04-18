import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from '../../../config/app/config.module';
import { AppConfigService } from '../../../config/app/config.service';
import { DatabasePostgresConfigService } from '../../../config/database/postgres/config.service';
import { DatabasePostgresConfigModule } from '../../../config/database/postgres/config.module';
import { getTypeOrmConfig } from '../../../common/helpers/typeorm.helper';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule, DatabasePostgresConfigModule],
      useFactory: (appConfigService: AppConfigService, databasePostgresConfigService: DatabasePostgresConfigService) =>
        getTypeOrmConfig({
          type: 'postgres',
          host: databasePostgresConfigService.host,
          port: parseInt(databasePostgresConfigService.port),
          username: databasePostgresConfigService.user,
          password: databasePostgresConfigService.password,
          database: databasePostgresConfigService.database,
          ssl: appConfigService.isProduction,
        }),
      inject: [AppConfigService, DatabasePostgresConfigService],
    }),
  ],
})
export class DatabasePostgresProviderModule {}
