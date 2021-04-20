import { define } from "typeorm-seeding";
import { Network } from "../../../models/networks/entities/network.entity";

define(Network, (faker) => {
  const network = new Network();
  network.id = faker.random.number(1);
  network.name = faker.name.findName();
  return network;
});
