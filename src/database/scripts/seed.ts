import { NestFactory } from "@nestjs/core";

import { AppModule } from "../../app.module";
import { NetworksService } from "../../models/networks/networks.service";

// import { networksSeed } from "../fixtures/network.fixture";

async function seed() {
  const app = await NestFactory.create(AppModule);
  // const networksService = app.get(NetworksService);
  // await networksService.saveAll(networksSeed);
}
seed();
