import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Transaction } from './transaction.model';
import { Contract } from './contract.model';

@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: number;

  @Column('text', { array: true })
  topics: string[];

  @Column()
  data: string;

  @ManyToOne(() => Transaction)
  transaction: Transaction;

  @ManyToOne(() => Contract)
  contract: Contract;
}
