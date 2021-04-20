import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { BlocksService } from "./blocks.service";
import { BlocksModule } from "./blocks.module";
import { Block } from "./entities/block.entity";

describe("BlocksService", () => {
  let service: BlocksService;

  const mockBlock = new Block();

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [BlocksModule],
    })
      .overrideProvider(getRepositoryToken(Block))
      .useValue({
        find: () => mockBlock,
        findOne: () => mockBlock,
        save: () => mockBlock,
      })
      .compile();
    service = moduleFixture.get<BlocksService>(BlocksService);
    const app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
