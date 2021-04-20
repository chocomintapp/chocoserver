import { Seeder, Factory } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Block } from "../../../models/blocks/entities/block.entity";

export default class BlockFicture implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Block)().createMany(10);
  }
}
