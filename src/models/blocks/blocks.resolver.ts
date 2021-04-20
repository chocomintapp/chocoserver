import { Resolver, Query, Args } from "@nestjs/graphql";
import { BlocksService } from "./blocks.service";
import { Block } from "./entities/block.entity";

@Resolver()
export class BlocksResolver {
  constructor(private readonly blocksService: BlocksService) {}

  @Query(() => [Block])
  async block(@Args("id") id: number, @Args("networkId") networkId: number): Promise<Block> {
    console.log(networkId);
    return this.blocksService.findOneById(id);
  }

  @Query(() => [Block])
  async blocks(): Promise<Block[]> {
    return this.blocksService.findAll();
  }
}
