import { Test } from "@nestjs/testing";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";

import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { NetworksService } from "./networks.service";

import { Repository } from "typeorm";
import { makeNetworkFixture } from "./fixtures/network.fixtures";

describe("NetworksService", () => {
  let service: NetworksService;
  let repository: Repository<Network>;
  const network = new Network();
  const getNetworkArgs = new GetNetworkArgs();
  const getNetworksArgs = new GetNetworksArgs();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NetworksService, { provide: getRepositoryToken(Network), useClass: Repository }],
    }).compile();
    repository = module.get<Repository<Network>>(getRepositoryToken(Network));
    service = module.get<NetworksService>(NetworksService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("findOneById", async () => {
    const fixture = makeNetworkFixture();
    jest.spyOn(repository, "findOne").mockResolvedValueOnce(fixture);
    expect(await service.findOneById(getNetworkArgs)).toEqual(fixture);
  });

  it("findAll should returns correct result", async () => {
    // expect(await service.findAll(getNetworksArgs)).toEqual("");
  });
});
