import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";

@Injectable()
export class NetworksService {
  constructor(
    @InjectRepository(Network)
    private readonly networkRepository: Repository<Network>
  ) {}

  async findOneById(args: GetNetworkArgs): Promise<Network> {
    const { chainId } = args;
    return await this.networkRepository.findOne({ chainId }, { relations: ["block"] });
  }

  async findAll(args: GetNetworksArgs): Promise<Network[]> {
    const { chainIds } = args;

    // FIXME #16: I'm feeling that this where implementation look not good...

    const where = {} as any;
    if (chainIds) {
      where.network = In(chainIds);
    }

    return await this.networkRepository.find({
      where,
      relations: ["blocks"],
    });
  }
}
