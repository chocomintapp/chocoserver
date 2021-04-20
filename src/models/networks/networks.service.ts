import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Network } from "./entities/network.entity";
import { INetwork } from "./interfaces/network.interface";

@Injectable()
export class NetworksService {
  constructor(
    @InjectRepository(Network)
    private readonly networkRepository: Repository<Network>
  ) {}

  async saveAll(networks: INetwork[]): Promise<Network[]> {
    return await this.networkRepository.save(networks);
  }

  async findAll(): Promise<Network[]> {
    return await this.networkRepository.find();
  }
}
