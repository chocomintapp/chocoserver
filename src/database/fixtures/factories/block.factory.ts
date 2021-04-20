import { define } from "typeorm-seeding";
import { Block } from "../../../models/blocks/entities/block.entity";

define(Block, (faker) => {
  const block = new Block();
  block.id = faker.random.number(1);
  return block;
});
