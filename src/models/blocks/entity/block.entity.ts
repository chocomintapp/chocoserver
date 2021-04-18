import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Block {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  number: number;
}
