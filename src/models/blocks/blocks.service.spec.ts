import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { BlocksService } from "./blocks.service";
import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { Block } from "./entities/block.entity";
import { getMockRepository } from "../../helpers/typeorm.helper";
import { makeBlockFixture } from "../../database/factories/block.factory";

describe("BlocksService", () => {
  let service: BlocksService;
  const fixture = makeBlockFixture();
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BlocksService, { provide: getRepositoryToken(Block), useValue: getMockRepository(fixture) }],
    }).compile();
    service = module.get<BlocksService>(BlocksService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("findOneById should returns correct result", async () => {
    const getBlockArgs = new GetBlockArgs();
    expect(await service.findOneById(getBlockArgs)).toEqual(fixture);
  });

  it("findAll should returns correct result", async () => {
    const getBlocksArgs = new GetBlocksArgs();
    expect(await service.findAll(getBlocksArgs)).toEqual([fixture]);
  });
});
