import * as faker from "faker";
import { Block } from "../../models/blocks/entities/block.entity";
import { makeNetworkFixture } from "./network.factory";

export const makeBlockFixture = () => {
  const block = new Block();
  block.blockNumber = faker.datatype.number();
  block.network = makeNetworkFixture();
  return block;
};
