import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlocksModule } from "./models/blocks/blocks.module";
import { NetworksModule } from "./models/networks/networks.module";
import { DatabaseProviderModule } from "./providers/database/provider.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "scema.graphql",
    }),
    DatabaseProviderModule,
    BlocksModule,
    NetworksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
