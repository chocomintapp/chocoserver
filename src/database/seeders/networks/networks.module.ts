import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Network } from '../../../models/networks/entities/network.entity';
import { NetworksSeederService } from './networks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Network])],
  providers: [NetworksSeederService],
  exports: [NetworksSeederService],
})
export class NetworksModule {}
