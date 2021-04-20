import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { EntityBase } from "../../../common/models/base/entities/base.entity";
import { Network } from "../../networks/entities/network.entity";
import { IBlock } from "../interfaces/block.interface";

@ObjectType()
@Entity()
export class Block extends EntityBase implements IBlock {
  @Field()
  @PrimaryColumn({ comment: "blockNumber" })
  id: number;

  @Field(() => [Network])
  @ManyToOne(() => Network)
  network: Network;
}
