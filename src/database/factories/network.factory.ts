import * as faker from "faker";
import { INetwork } from "../../models/networks/interfaces/network.interface";

export const makeNetworkFixture = (overrideParams?: Partial<INetwork>): INetwork => {
  return {
    chainId: faker.datatype.number(),
    name: faker.lorem.word(),
    ...overrideParams,
  };
};
