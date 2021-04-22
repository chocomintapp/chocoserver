import { Field } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Base extends BaseEntity {
  @Field()
  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date;
}
