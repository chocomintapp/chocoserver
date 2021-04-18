import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Transaction } from '../transactions/transaction.entity';
import { Network } from '../networks/network.entity';

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
