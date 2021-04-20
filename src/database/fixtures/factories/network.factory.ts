import { define } from "typeorm-seeding";
import { Network } from "../../../models/networks/entities/network.entity";

import * as faker from "faker";

define(Network, () => {
  const network = new Network();
  network.id = faker.datatype.number();
  network.name = faker.lorem.word();
  return network;
});
