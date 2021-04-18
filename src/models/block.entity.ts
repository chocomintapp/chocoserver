import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Network } from './network.entity';
import { Transaction } from './transaction.entity';

@Entity({ name: 'block' })
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number2: number;

  @ManyToOne(() => Network)
  network: Network;

  @OneToMany(() => Transaction, (x) => x.id)
  transctions!: Transaction[];
}
