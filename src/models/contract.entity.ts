import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Event } from './event.entity';
import { Network } from './network.entity';

@Entity({ name: 'contract' })
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  isERC721: boolean;

  @ManyToOne(() => Network)
  network: Network;

  @OneToMany(() => Event, (x) => x.id)
  Events: Event[];
}
