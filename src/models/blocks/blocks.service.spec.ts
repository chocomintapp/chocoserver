import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { makeBlockFixture } from "../../database/factories/block.factory";
import { getMockRepository } from "../../helpers/typeorm.helper";
import { BlocksService } from "./blocks.service";
import { GetBlockArgs } from "./dto/get-block.args";
import { GetBlocksArgs } from "./dto/get-blocks.args";
import { Block } from "./entities/block.entity";

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

  it("findOneById", async () => {
    const getBlockArgs = new GetBlockArgs();
    expect(await service.findOneById(getBlockArgs)).toEqual(fixture);
  });

  it("findAll", async () => {
    const getBlocksArgs = new GetBlocksArgs();
    expect(await service.findAll(getBlocksArgs)).toEqual([fixture]);
  });

  it("save", async () => {
    expect(await service.save(fixture)).toEqual(fixture);
  });

  it("saveAll", async () => {
    expect(await service.saveAll([fixture])).toEqual([fixture]);
  });
});
