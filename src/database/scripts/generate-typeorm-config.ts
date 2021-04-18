import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { getTypeOrmConfig } from '../../common/helpers/typeorm.helper';
import { AppConfigModule } from '../../config/app/config.module';
import { AppConfigService } from '../../config/app/config.service';
import { DatabasePostgresConfigModule } from '../../config/database/postgres/config.module';
import { DatabasePostgresConfigService } from '../../config/database/postgres/config.service';

async function bootstrap() {
  const appConfigModule = await NestFactory.create(AppConfigModule);
  const databasePostgresConfigModule = await NestFactory.create(DatabasePostgresConfigModule);
  const appConfigService: AppConfigService = appConfigModule.get('AppConfigService');
  const databasePostgresConfigService: DatabasePostgresConfigService = databasePostgresConfigModule.get(
    'DatabasePostgresConfigService',
  );
  const typeOrmConfig = getTypeOrmConfig({
    type: 'postgres',
    host: databasePostgresConfigService.host,
    port: parseInt(databasePostgresConfigService.port),
    username: databasePostgresConfigService.user,
    password: databasePostgresConfigService.password,
    database: databasePostgresConfigService.database,
    ssl: appConfigService.isProduction,
    isMigrationBuild: true,
  });
  fs.writeFileSync('ormconfig.json', JSON.stringify(typeOrmConfig, null, 2));
}
bootstrap();
