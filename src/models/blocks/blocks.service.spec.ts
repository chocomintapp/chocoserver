import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { BlocksModule } from "./blocks.module";
import { BlocksService } from "./blocks.service";
import { Block } from "./entities/block.entity";

describe("BlocksService", () => {
  let service: BlocksService;
  const block = new Block();
  const mockRepository = {
    find: () => block,
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

  it("findAll", async () => {
    console.log(await service.findAll());
  });
});
