import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Base } from "../../base/entities/base.entity";
import { Network } from "../../networks/entities/network.entity";
import { IBlock } from "../interfaces/block.interface";

@ObjectType()
@Entity()
export class Block extends Base implements IBlock {
  @Field()
  @PrimaryColumn()
  blockNumber: number;

  @Field(() => Network)
  @ManyToOne(() => Network, (network) => network.blocks, { primary: true })
  network: Network;
}
