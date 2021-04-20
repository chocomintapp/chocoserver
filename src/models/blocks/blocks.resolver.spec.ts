import { Test, TestingModule } from "@nestjs/testing";
import { BlocksResolver } from "./blocks.resolver";
import { BlocksService } from "./blocks.service";
import { Block } from "./entities/block.entity";

describe("BlocksResolver", () => {
  let resolver: BlocksResolver;
  const block = new Block();
  const mockRepository = {
    findAll: () => [block],
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

  it("blocks", async () => {
    console.log(await resolver.blocks());
  });
});
