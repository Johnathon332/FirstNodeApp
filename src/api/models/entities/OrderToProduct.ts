import { Entity, OneToOne, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';
import { DbEntity } from '../DbEntity';

/**
 * Entity to mape orders to products
 */
@Entity()
export class OrderToProduct extends DbEntity {
  @ManyToOne(
    () => Order,
    order => order.products
  )
  public order!: Order;

  @OneToOne(() => Product)
  @JoinColumn()
  public product!: number;

  @Column()
  public quantity: number;
}
