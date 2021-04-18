import { Resolver, Query } from '@nestjs/graphql';
import { BlocksService } from './blocks.service';
import { Block } from './entities/block.entity';

@Resolver()
export class BlocksResolver {
  constructor(private readonly blocksService: BlocksService) {}

  @Query(() => [Block])
  async blocks(): Promise<Block[]> {
    return this.blocksService.findAll();
  }
}
