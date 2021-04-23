import { Test, TestingModule } from "@nestjs/testing";
import { makeNetworkFixture } from "../../database/factories/network.factory";
import { getMockService } from "../../helpers/typeorm.helper";
import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { NetworksResolver } from "./networks.resolver";
import { NetworksService } from "./networks.service";

describe("NetworksResolver", () => {
  let resolver: NetworksResolver;

  const fixture = makeNetworkFixture();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworksResolver, { provide: NetworksService, useValue: getMockService(fixture) }],
    }).compile();
    resolver = module.get<NetworksResolver>(NetworksResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("network", async () => {
    const getNetworkArgs = new GetNetworkArgs();
    expect(await resolver.network(getNetworkArgs)).toEqual(fixture);
  });

  it("networks", async () => {
    const getNetworksArgs = new GetNetworksArgs();
    expect(await resolver.networks(getNetworksArgs)).toEqual([fixture]);
  });
});
