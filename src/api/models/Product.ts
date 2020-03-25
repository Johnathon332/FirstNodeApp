import { CreateDateColumn, Entity, UpdateDateColumn, Column } from 'typeorm';
import { DbEntity } from './DbEntity';

@Entity()
export class Product extends DbEntity {
  @Column()
  public name: string;

  @Column('decimal', { precision: 7, scale: 2, default: 0 })
  public price: number;
}
