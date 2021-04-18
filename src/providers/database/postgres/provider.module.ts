import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from '../../../config/app/config.module';
import { AppConfigService } from '../../../config/app/config.service';
import { DatabasePostgresConfigService } from '../../../config/database/postgres/config.service';
import { DatabasePostgresConfigModule } from '../../../config/database/postgres/config.module';
import { entities, migrationsTableName, migrations, migrationsDir } from '../../../common/constants/settings';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule, DatabasePostgresConfigModule],
      useFactory: (appConfigService: AppConfigService, postgresConfigService: DatabasePostgresConfigService) => ({
        type: 'postgres',
        host: postgresConfigService.host,
        port: parseInt(postgresConfigService.port),
        username: postgresConfigService.user,
        password: postgresConfigService.password,
        database: postgresConfigService.database,
        entities,
        migrationsTableName,
        migrations,
        cli: {
          migrationsDir,
        },
        ssl: appConfigService.isProduction,
      }),
      inject: [AppConfigService, DatabasePostgresConfigService],
    }),
  ],
})
export class DatabasePostgresProviderModule {}
