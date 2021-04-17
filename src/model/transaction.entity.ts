import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Block } from './block.entity';
import { Log } from './log.entity';

@Entity({ name: 'transaction' })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 66 })
  hash: string;

  @Column()
  index: number;

  @Column()
  timestamp: number;

  @ManyToOne(() => Block)
  block: Block;

  @OneToMany(() => Log, (x) => x.id)
  logs: Block;
}
