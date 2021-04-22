import { Test, TestingModule } from "@nestjs/testing";
import { BlocksResolver } from "./blocks.resolver";
import { BlocksService } from "./blocks.service";
import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { makeBlockFixture } from "../../database/factories/block.factory";
import { getMockService } from "../../helpers/typeorm.helper";

describe("BlocksResolver", () => {
  let resolver: BlocksResolver;
  const fixture = makeBlockFixture();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocksResolver, { provide: BlocksService, useValue: getMockService(fixture) }],
    }).compile();
    resolver = module.get<BlocksResolver>(BlocksResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("block should returns correct result", async () => {
    const getBlockArgs = new GetBlockArgs();
    expect(await resolver.block(getBlockArgs)).toEqual(fixture);
  });

  it("blocks should returns correct result", async () => {
    const getBlocksArgs = new GetBlocksArgs();
    expect(await resolver.blocks(getBlocksArgs)).toEqual([fixture]);
  });
});
