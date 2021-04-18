import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Contract } from './contract.entity';
import { Metadata } from './metadata.entity';

@Entity({ name: 'token' })
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tokenId: string;

  @ManyToOne(() => Contract)
  contract: Contract;

  @OneToOne(() => Contract)
  metadata: Metadata;
}
