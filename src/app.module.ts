import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { AppConfigService } from './config/app/config.service';
import { PostgresConfigService } from './config/database/postgres/config.service';
import { PostgresConfigModule } from './config/database/postgres/config.module';
// import { ConfigModule } from '@nestjs/config';
// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule, PostgresConfigModule],
      useFactory: (appConfigService: AppConfigService, postgresConfigService: PostgresConfigService) => ({
        type: 'postgres',
        host: postgresConfigService.host,
        port: parseInt(postgresConfigService.port),
        username: postgresConfigService.user,
        password: postgresConfigService.password,
        database: postgresConfigService.database,
        entities: ['dist/**/*.model{.js}'],
        migrationsTableName: 'migration',
        migrations: ['dist/migration/*.js'],
        cli: {
          migrationsDir: 'src/migration',
        },
        ssl: appConfigService.isProduction,
      }),
      inject: [AppConfigService, PostgresConfigService],
    }),
    // GraphQLModule.forRoot({
    //   playground: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
