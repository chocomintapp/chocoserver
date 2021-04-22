import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlocksModule } from "./models/blocks/blocks.module";
import { NetworksModule } from "./models/networks/networks.module";
import { configService } from "./common/config/config.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    BlocksModule,
    NetworksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
