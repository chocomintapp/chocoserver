import { Injectable, Logger } from "@nestjs/common";
import { NetworksSeederService } from "./networks/networks.service";

@Injectable()
export class Seeder {
  constructor(private readonly logger: Logger, private readonly newrorkSeederService: NetworksSeederService) {}
  async seed() {
    await this.networks()
      .then((completed) => {
        this.logger.debug("Successfuly completed seeding networks.");
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error("Failed seeding networks.");
        Promise.reject(error);
      });
  }
  async networks() {
    return await Promise.all(this.newrorkSeederService.create())
      .then((createdNetworks) => {
        this.logger.debug(
          "No. of networks created : " +
            createdNetworks.filter((nullValueOrCreatedNetwork) => nullValueOrCreatedNetwork).length
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
