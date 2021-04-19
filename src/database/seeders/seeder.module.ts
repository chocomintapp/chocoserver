import { Module } from "@nestjs/common";
import { DatabaseProviderModule } from "../../providers/helpers/database.helper";
import { SeederService } from "./seeder.service";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Network } from "../../models/networks/entities/network.entity";
@Module({
  imports: [DatabaseProviderModule, TypeOrmModule.forFeature([Network])],
  providers: [SeederService],
})
export class SeederModule {
  constructor(private connection: Connection) {}
}
