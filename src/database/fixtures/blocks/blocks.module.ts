import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from '../../../models/blocks/entities/block.entity';
import { BlocksFixtureService } from './blocks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Block])],
  providers: [BlocksFixtureService],
  exports: [BlocksFixtureService],
})
export class BlocksModule {}
