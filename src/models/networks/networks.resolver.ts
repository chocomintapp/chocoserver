import { Resolver, Query } from '@nestjs/graphql';
import { Network } from './entities/network.entity';
import { NetworksService } from './networks.service';

@Resolver()
export class NetworksResolver {
  constructor(private readonly networksService: NetworksService) {}

  @Query(() => [Network])
  async networks(): Promise<Network[]> {
    return this.networksService.findAll();
  }
}
