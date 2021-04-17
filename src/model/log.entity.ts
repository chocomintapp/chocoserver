import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Contract } from './contract.entity';

@Entity({ name: 'log' })
export class Log {
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
