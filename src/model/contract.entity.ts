import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Log } from './log.entity';

@Entity({ name: 'contract' })
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  isERC721: boolean;

  @OneToMany(() => Log, (x) => x.id)
  logs: Log[];
}
