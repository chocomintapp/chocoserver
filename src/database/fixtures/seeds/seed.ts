import { Seeder, factory } from "typeorm-seeding";
import { Block } from "../../../models/blocks/entities/block.entity";
import { Network } from "../../../models/networks/entities/network.entity";

export default class Seed implements Seeder {
  public async run(): Promise<any> {
    const networkCount = 5;
    let networkCounter = 0;
    await factory(Network)()
      .map(async (network: Network) => {
        networkCounter++;
        network.chainId = networkCounter;
        return network;
      })
      .createMany(networkCount);

    const blockCount = 100;

    for (let networkId = 1; networkId <= networkCount; networkId++) {
      let blockCounter = 0;
      await factory(Block)()
        .map(async (block: Block) => {
          blockCounter++;
          block.blockNumber = blockCounter;
          block.network = networkId as any;
          return block;
        })
        .createMany(blockCount);
    }
  }
}
