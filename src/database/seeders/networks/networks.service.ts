import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Network } from '../../../models/networks/entities/network.entity';
import { INetwork } from '../../../models/networks/interfaces/network.interface';
import { networks } from './data';

@Injectable()
export class NetworksSeederService {
  constructor(
    @InjectRepository(Network)
    private readonly networkRepository: Repository<Network>,
  ) {}

  create(): Array<Promise<Network>> {
    return networks.map(async (network: INetwork) => {
      return await this.networkRepository
        .findOne(network)
        .then(async (dbNetwork) => {
          if (dbNetwork) {
            return Promise.resolve(null);
          }
          return Promise.resolve(await this.networkRepository.create(network));
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
