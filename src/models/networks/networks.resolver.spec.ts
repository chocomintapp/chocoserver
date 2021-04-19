import { Test, TestingModule } from "@nestjs/testing";
import { NetworksResolver } from "./networks.resolver";

describe("NetworksResolver", () => {
  let resolver: NetworksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworksResolver],
    }).compile();

    resolver = module.get<NetworksResolver>(NetworksResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
