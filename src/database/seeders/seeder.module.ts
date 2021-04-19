import { Module, Logger } from "@nestjs/common";
import { DatabasePostgresProviderModule } from "../../providers/database/postgres/provider.module";
import { NetworksSeederModule } from "./networks/networks.module";
import { Seeder } from "./seeder";

@Module({
  imports: [DatabasePostgresProviderModule, NetworksSeederModule],
  providers: [Logger, Seeder],
})
export class SeederModule {}
