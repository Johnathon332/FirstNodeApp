import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  Column,
} from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';
import { DbEntity } from './DbEntity';

/**
 * Entity to mape orders to products
 */
@Entity()
export class OrderToProduct extends DbEntity {
  @ManyToOne(
    type => Order,
    order => order.products
  )
  public order!: Order;

  @OneToOne(type => Product)
  public productId!: number;

  @Column()
  public quantity: number;
}
