import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BlocksModule } from './models/blocks/blocks.module';
import { DatabasePostgresProviderModule } from './providers/database/postgres/provider.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    DatabasePostgresProviderModule,
    BlocksModule,
  ],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
