import * as faker from "faker";
import { Network } from "../entities/network.entity";

export const makeNetworkFixture = () => {
  const network = new Network();
  network.chainId = faker.datatype.number();
  network.name = faker.lorem.word();
  return network;
};
