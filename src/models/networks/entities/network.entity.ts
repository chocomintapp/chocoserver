import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, Column, OneToMany } from "typeorm";
import { EntityBase } from "../../../config/models/base/entities/base.entity";
import { Block } from "../../blocks/entities/block.entity";
import { INetwork } from "../interfaces/network.interface";

@ObjectType()
@Entity()
export class Network extends EntityBase implements INetwork {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  chainId: string;

  @Field(() => [Block], { nullable: true })
  @OneToMany(() => Block, (x) => x.id)
  blocks?: Block[];
}
