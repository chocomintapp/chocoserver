import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { BlocksService } from "./blocks.service";

import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { Block } from "./entities/block.entity";

describe("BlocksService", () => {
  let service: BlocksService;
  const block = new Block();
  const getBlockArgs = new GetBlockArgs();
  const getBlocksArgs = new GetBlocksArgs();

  const findOneResult = block;
  const findResult = [block];

  const mockRepository = {
    findOne: () => findOneResult,
    find: () => findResult,
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BlocksService, { provide: getRepositoryToken(Block), useValue: mockRepository }],
    }).compile();
    service = module.get<BlocksService>(BlocksService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("findOneById should returns correct result", async () => {
    expect(await service.findOneById(getBlockArgs)).toEqual(findOneResult);
  });

  it("findAll should returns correct result", async () => {
    // FIXME #16: If this issue fixed and where has if condition, test needs to be added
    expect(await service.findAll(getBlocksArgs)).toEqual(findResult);
  });
});
