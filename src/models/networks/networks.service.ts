import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { buildTypeormQueryWhereFromArgsDto } from "../../helpers/typeorm.helper";
import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { INetwork } from "./interfaces/network.interface";

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
    const where = buildTypeormQueryWhereFromArgsDto(args);
    return await this.networkRepository.find({
      where,
      relations: ["blocks"],
    });
  }

  async save(network: INetwork): Promise<Network> {
    return await this.networkRepository.save(network);
  }

  async saveAll(networks: INetwork[]): Promise<Network[]> {
    return await this.networkRepository.save(networks);
  }
}
