import { Product } from './Product';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrderToProduct } from './OrderToProduct';
import { DbEntity } from './DbEntity';

@Entity()
export class Order extends DbEntity {
  @OneToMany(
    type => OrderToProduct,
    orderToProduct => orderToProduct.order
  )
  public products!: OrderToProduct[];
}
