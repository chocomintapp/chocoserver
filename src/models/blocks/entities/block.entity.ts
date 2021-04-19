import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, Column, ManyToOne } from "typeorm";
import { EntityBase } from "../../../common/models/base/entities/base.entity";
import { Network } from "../../networks/entities/network.entity";
import { IBlock } from "../interfaces/block.interface";

@ObjectType()
@Entity()
export class Block extends EntityBase implements IBlock {
  @Field()
  @Column()
  number: number;

  @Field(() => [Network])
  @ManyToOne(() => Network)
  network: Network;
}
