import { Resolver, Query, Args } from "@nestjs/graphql";
import { GetNetworkArgs } from "./dto/get-network.args";
import { GetNetworksArgs } from "./dto/get-networks.args";
import { Network } from "./entities/network.entity";
import { NetworksService } from "./networks.service";

@Resolver()
export class NetworksResolver {
  constructor(private readonly networksService: NetworksService) {}

  @Query(() => [Network])
  async network(@Args() args: GetNetworkArgs): Promise<Network> {
    return this.networksService.findOneById(args);
  }

  @Query(() => [Network])
  async networks(@Args() args: GetNetworksArgs): Promise<Network[]> {
    return this.networksService.findAll(args);
  }
}
