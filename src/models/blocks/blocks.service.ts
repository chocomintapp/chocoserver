import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Block } from "./entities/block.entity";

@Injectable()
export class BlocksService {
  constructor(
    @InjectRepository(Block)
    private readonly blockRepository: Repository<Block>
  ) {}
  async findOneById(id): Promise<Block> {
    return await this.blockRepository.findOne(id);
  }

  async findAll(): Promise<Block[]> {
    console.log(await this.blockRepository.find({ relations: ["network"] }));
    return await this.blockRepository.find();
  }
}
