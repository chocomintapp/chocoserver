import { Test, TestingModule } from "@nestjs/testing";
import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { NetworksResolver } from "./networks.resolver";
import { NetworksService } from "./networks.service";

describe("NetworksResolver", () => {
  let resolver: NetworksResolver;

  // FIXME #17: This is too much mock, it can be integrated with database factory
  // but this may require file structure refactoring, so leave it as it is just for now
  const network = new Network();
  const getNetworkArgs = new GetNetworkArgs();
  const getNetworksArgs = new GetNetworksArgs();

  const findOneByIdResult = network;
  const findAllResult = [network];

  const mockRepository = {
    findOneById: () => findOneByIdResult,
    findAll: () => findAllResult,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworksResolver, { provide: NetworksService, useValue: mockRepository }],
    }).compile();
    resolver = module.get<NetworksResolver>(NetworksResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("network should returns correct result", async () => {
    expect(await resolver.network(getNetworkArgs)).toEqual(findOneByIdResult);
  });

  it("networks should returns correct result", async () => {
    expect(await resolver.networks(getNetworksArgs)).toEqual(findAllResult);
  });
});
