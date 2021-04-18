import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Block } from './block.model';
import { Event } from './event.model';

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

  @OneToMany(() => Event, (x) => x.id)
  events: Event[];
}
