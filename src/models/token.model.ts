import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Contract } from './contract.model';
import { Metadata } from './metadata.model';

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
