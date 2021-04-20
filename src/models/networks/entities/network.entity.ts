import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { EntityBase } from "../../../common/models/base/entities/base.entity";
import { Block } from "../../blocks/entities/block.entity";
import { INetwork } from "../interfaces/network.interface";

@ObjectType()
@Entity()
export class Network extends EntityBase implements INetwork {
  @Field()
  @PrimaryColumn()
  chainId: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [Block], { nullable: true })
  @OneToMany(() => Block, (block) => block.network)
  blocks?: Block[];
}
