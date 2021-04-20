import { Seeder, Factory } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Block } from "../../../models/blocks/entities/block.entity";
import { Network } from "../../../models/networks/entities/network.entity";

import * as faker from "faker";

export default class Seed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const networkCount = 5;
    let networkCounter = 0;
    await factory(Network)()
      .map(async (network: Network) => {
        networkCounter++;
        network.id = networkCounter;
        return network;
      })
      .createMany(networkCount);

    const blockCount = 100;

    for (let networkId = 1; networkId <= networkCount; networkId++) {
      let blockCounter = 0;
      await factory(Block)()
        .map(async (block: Block) => {
          blockCounter++;
          block.id = blockCounter;
          block.network = networkId as any;
          return block;
        })
        .createMany(blockCount);
    }
  }
}
