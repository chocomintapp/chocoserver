import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasePostgresProviderModule } from './providers/database/postgres/provider.module';

// import { ConfigModule } from '@nestjs/config';
// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    DatabasePostgresProviderModule,
    // GraphQLModule.forRoot({
    //   playground: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
