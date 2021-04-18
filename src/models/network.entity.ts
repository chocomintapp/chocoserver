import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Block } from './block.entity';
import { Contract } from './contract.entity';

@Entity({ name: 'network' })
export class Network {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  chainId: string;

  @OneToMany(() => Block, (x) => x.id)
  blocks: Block[];

  @OneToMany(() => Contract, (x) => x.id)
  contracts: Contract[];
}
