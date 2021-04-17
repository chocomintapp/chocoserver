import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity({ name: 'block' })
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @OneToMany(() => Transaction, (x) => x.id)
  transctions!: Transaction[];
}
