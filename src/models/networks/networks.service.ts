import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Network } from './entities/network.entity';

@Injectable()
export class NetworksService {
  constructor(
    @InjectRepository(Network)
    private readonly postRepository: Repository<Network>,
  ) {}

  async findAll(): Promise<Network[]> {
    return await this.postRepository.find();
  }
}
