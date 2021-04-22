import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { Block } from "./entities/block.entity";
import { buildTypeormQueryWhereFromArgsDto } from "../../helpers/typeorm.helper";

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
    const where = buildTypeormQueryWhereFromArgsDto(args);
    return await this.blockRepository.find({
      where,
      relations: ["network"],
    });
  }
}
