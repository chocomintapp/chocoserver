import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { buildTypeormQueryWhereFromArgsDto } from "../../helpers/typeorm.helper";

@Injectable()
export class NetworksService {
  constructor(
    @InjectRepository(Network)
    private readonly networkRepository: Repository<Network>
  ) {}

  async findOneById(args: GetNetworkArgs): Promise<Network> {
    return await this.networkRepository.findOne(args, { relations: ["block"] });
  }

  async findAll(args: GetNetworksArgs): Promise<Network[]> {
    const where = buildTypeormQueryWhereFromArgsDto(args);
    return await this.networkRepository.find({
      where,
      relations: ["blocks"],
    });
  }
}
