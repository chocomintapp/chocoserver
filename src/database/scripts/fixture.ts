import { NestFactory } from "@nestjs/core";
import { AppModule } from "../../app.module";
import { makeBlockFixture } from "../factories/block.factory";
import { makeNetworkFixture } from "../factories/network.factory";

import { BlocksService } from "../../models/blocks/blocks.service";
import { NetworksService } from "../../models/networks/networks.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const blocksService = app.get(BlocksService);
  const networksService = app.get(NetworksService);

  const networkCount = 1;
  const networks = [];
  for (let chainId = 1; chainId <= networkCount; chainId++) {
    const network = makeNetworkFixture({ chainId });
    networks.push(network);
  }
  networksService.saveAll(networks);

  const blockCount = 1;
  const blocks = [];
  for (let networkId = 0; (networkId = networkCount); networkId++) {
    for (let blockNumber = 1; blockNumber <= blockCount; blockNumber++) {
      const network = networks[networkId];
      const block = makeBlockFixture({ blockNumber: 1, network });
      blocks.push(block);
    }
  }
  blocksService.saveAll(blocks);
}
bootstrap();
