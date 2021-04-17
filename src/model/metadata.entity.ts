import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Token } from './token.entity';

@Entity({ name: 'metadata' })
export class Metadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  image_data: string;

  @Column()
  external_url: string;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column()
  attributes: string;

  @Column()
  background_color: string;

  @Column()
  animation_url: string;

  @Column()
  youtube_url: string;

  @OneToOne(() => Token)
  token: Token;
}
