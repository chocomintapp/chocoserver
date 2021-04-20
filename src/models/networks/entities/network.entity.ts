import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { EntityBase } from "../../../common/models/base/entities/base.entity";
import { Block } from "../../blocks/entities/block.entity";
import { INetwork } from "../interfaces/network.interface";

@ObjectType()
@Entity()
export class Network extends EntityBase implements INetwork {
  @Field()
  @PrimaryColumn({ comment: "chainId" })
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [Block], { nullable: true })
  @OneToMany(() => Block, (x) => x.id)
  blocks?: Block[];
}
