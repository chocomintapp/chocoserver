import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { makeNetworkFixture } from "../../database/factories/network.factory";
import { getMockRepository } from "../../helpers/typeorm.helper";
import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { NetworksService } from "./networks.service";

describe("NetworksService", () => {
  let service: NetworksService;
  const fixture = makeNetworkFixture();
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NetworksService, { provide: getRepositoryToken(Network), useValue: getMockRepository(fixture) }],
    }).compile();
    service = module.get<NetworksService>(NetworksService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("findOneById", async () => {
    const getNetworkArgs = new GetNetworkArgs();
    expect(await service.findOneById(getNetworkArgs)).toEqual(fixture);
  });

  it("findAll", async () => {
    const getNetworksArgs = new GetNetworksArgs();
    expect(await service.findAll(getNetworksArgs)).toEqual([fixture]);
  });

  it("save", async () => {
    expect(await service.save(fixture)).toEqual(fixture);
  });

  it("saveAll", async () => {
    expect(await service.saveAll([fixture])).toEqual([fixture]);
  });
});
