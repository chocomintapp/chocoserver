import { Field } from "@nestjs/graphql";
import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { IBaseEntity } from "../interfaces/base.interface";

export class EntityBase implements IBaseEntity {
  @Field()
  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date;
}
