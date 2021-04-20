import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { NetworksService } from "./networks.service";

describe("NetworksService", () => {
  let service: NetworksService;
  const network = new Network();
  const getNetworkArgs = new GetNetworkArgs();
  const getNetworksArgs = new GetNetworksArgs();

  const findOneResult = network;
  const findResult = [network];

  const mockRepository = {
    findOne: () => findOneResult,
    find: () => findResult,
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NetworksService, { provide: getRepositoryToken(Network), useValue: mockRepository }],
    }).compile();
    service = module.get<NetworksService>(NetworksService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("findOneById should returns correct result", async () => {
    expect(await service.findOneById(getNetworkArgs)).toEqual(findOneResult);
  });

  it("findAll should returns correct result", async () => {
    // FIXME #16: If this issue fixed and where has if condition, test needs to be added
    expect(await service.findAll(getNetworksArgs)).toEqual(findResult);
  });
});
