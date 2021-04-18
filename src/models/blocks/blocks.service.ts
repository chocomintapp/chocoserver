import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Block } from './entity/block.entity';

@Injectable()
export class BlocksService {
  constructor(
    @InjectRepository(Block)
    private readonly postRepository: Repository<Block>,
  ) {}

  async findAll(): Promise<Block[]> {
    return await this.postRepository.find();
  }
}
