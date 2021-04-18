import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlocksResolver } from './blocks.resolver';
import { BlocksService } from './blocks.service';
import { Block } from './entities/block.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Block])],
  providers: [BlocksResolver, BlocksService],
})
export class BlocksModule {}
