import * as faker from "faker";
import { define } from "typeorm-seeding";
import { Network } from "../../../models/networks/entities/network.entity";

define(Network, () => {
  const network = new Network();
  network.chainId = faker.datatype.number();
  network.name = faker.lorem.word();
  return network;
});
