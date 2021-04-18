import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Block } from "../../../models/blocks/entities/block.entity";
import { IBlock } from "../../../models/blocks/interfaces/block.interface";
import { blocks } from "./data";

@Injectable()
export class BlocksFixtureService {
  constructor(
    @InjectRepository(Block)
    private readonly blockRepository: Repository<Block>
  ) {}

  create(): Array<Promise<Block>> {
    return blocks.map(async (block: IBlock) => {
      return await this.blockRepository
        .findOne(block)
        .then(async (dbBlock) => {
          if (dbBlock) {
            return Promise.resolve(null);
          }
          return Promise.resolve(await this.blockRepository.create(block));
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
