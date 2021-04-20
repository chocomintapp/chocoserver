import { define, factory } from "typeorm-seeding";
import { Block } from "../../../models/blocks/entities/block.entity";
import { Network } from "../../../models/networks/entities/network.entity";

import * as faker from "faker";

define(Block, () => {
  const block = new Block();
  block.id = faker.datatype.number();
  block.network = factory(Network)() as any;
  return block;
});
