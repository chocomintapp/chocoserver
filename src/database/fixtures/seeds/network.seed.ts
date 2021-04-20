import { Seeder, Factory } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Network } from "../../../models/networks/entities/network.entity";

export default class NetworkFixture implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log("test");
    await factory(Network)().createMany(10);
  }
}
