import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Network } from './entities/network.entity';
import { NetworksResolver } from './networks.resolver';
import { NetworksService } from './networks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Network])],
  providers: [NetworksService, NetworksResolver],
})
export class NetworksModule {}
