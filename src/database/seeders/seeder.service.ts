import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Network } from "../../models/networks/entities/network.entity";

import { networksSeed } from "./seed/networks.seed";

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Network)
    private readonly networkRepository: Repository<Network>
  ) {}

  async seedNetworks(): Promise<Network[]> {
    return await this.networkRepository.save(networksSeed);
  }
}
