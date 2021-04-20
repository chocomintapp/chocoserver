import { Test, TestingModule } from "@nestjs/testing";
import { BlocksResolver } from "./blocks.resolver";
import { BlocksService } from "./blocks.service";
import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { Block } from "./entities/block.entity";

describe("BlocksResolver", () => {
  let resolver: BlocksResolver;

  // FIXME #17: This is too much mock, it can be integrated with database factory
  // but this may require file structure refactoring, so leave it as it is just for now
  const block = new Block();
  const getBlockArgs = new GetBlockArgs();
  const getBlocksArgs = new GetBlocksArgs();

  const findOneByIdResult = block;
  const findAllResult = [block];

  const mockRepository = {
    findOneById: () => findOneByIdResult,
    findAll: () => findAllResult,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocksResolver, { provide: BlocksService, useValue: mockRepository }],
    }).compile();
    resolver = module.get<BlocksResolver>(BlocksResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("block should returns correct result", async () => {
    expect(await resolver.block(getBlockArgs)).toEqual(findOneByIdResult);
  });

  it("blocks should returns correct result", async () => {
    expect(await resolver.blocks(getBlocksArgs)).toEqual(findAllResult);
  });
});
