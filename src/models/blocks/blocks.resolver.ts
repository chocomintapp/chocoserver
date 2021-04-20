import { Resolver, Query, Args } from "@nestjs/graphql";
import { BlocksService } from "./blocks.service";
import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { Block } from "./entities/block.entity";

@Resolver()
export class BlocksResolver {
  constructor(private readonly blocksService: BlocksService) {}

  @Query(() => Block)
  async block(@Args() args: GetBlockArgs): Promise<Block> {
    return this.blocksService.findOneById(args);
  }

  @Query(() => [Block])
  async blocks(@Args() args: GetBlocksArgs): Promise<Block[]> {
    return this.blocksService.findAll(args);
  }
}
