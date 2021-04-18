import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Transaction } from './transaction.model';
import { Network } from './network.model';

@Entity({ name: 'block' })
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @ManyToOne(() => Network)
  network: Network;

  @OneToMany(() => Transaction, (x) => x.id)
  transctions!: Transaction[];
}
