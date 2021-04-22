import { Field } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IBase } from "../interfaces/base.interface";

export class Base extends BaseEntity implements IBase {
  @Field()
  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date;
}
