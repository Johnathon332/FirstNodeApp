import { Entity, OneToMany } from 'typeorm';
import { OrderToProduct } from './OrderToProduct';
import { DbEntity } from '../DbEntity';

@Entity()
export class Order extends DbEntity {
  @OneToMany(
    () => OrderToProduct,
    orderToProduct => orderToProduct.order, 
    { cascade: true }
  )
  public products: OrderToProduct[];
}
