import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { NetworksService } from "./networks.service";
import { makeNetworkFixture } from "../../database/factories/network.factory";
import { getMockRepository } from "../../helpers/typeorm.helper";

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
});
