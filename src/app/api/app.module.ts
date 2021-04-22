import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "../../config/config.module";
import { BlocksModule } from "../../models/blocks/blocks.module";
import { NetworksModule } from "../../models/networks/networks.module";
import { ApiAppController } from "./app.controller";
import { ApiAppService } from "./app.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    BlocksModule,
    NetworksModule,
  ],
  controllers: [ApiAppController],
  providers: [ApiAppService],
})
export class ApiAppModule {}
