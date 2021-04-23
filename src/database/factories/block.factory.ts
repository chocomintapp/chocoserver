import * as faker from "faker";
import { IBlock } from "../../models/blocks/interfaces/block.interface";
import { makeNetworkFixture } from "./network.factory";

export const makeBlockFixture = (overrideParams?: Partial<IBlock>): IBlock => {
  return {
    blockNumber: faker.datatype.number(),
    network: makeNetworkFixture(),
    ...overrideParams,
  };
};
