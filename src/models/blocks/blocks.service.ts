import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { Block } from "./entities/block.entity";

@Injectable()
export class BlocksService {
  constructor(
    @InjectRepository(Block)
    private readonly blockRepository: Repository<Block>
  ) {}

  async findOneById(args: GetBlockArgs): Promise<Block> {
    const { blockNumber, chainId } = args;
    return await this.blockRepository.findOne({ blockNumber, network: chainId as any }, { relations: ["network"] });
  }

  async findAll(args: GetBlocksArgs): Promise<Block[]> {
    const { blockNumbers, chainIds } = args;

    const where = {} as any;
    if (blockNumbers) {
      where.blockNumber = In(blockNumbers);
    }
    if (chainIds) {
      where.network = In(chainIds);
    }

    return await this.blockRepository.find({
      where,
      relations: ["network"],
    });
  }
}
