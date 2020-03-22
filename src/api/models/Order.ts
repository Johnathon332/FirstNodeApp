import { Product } from './Product';

export class Order {
  public id!: number;

  //@ts-ignore

  public productId!: number;

  //@ts-ignore

  public product!: Product;

  public quantity!: number;


  public createdAt!: Date;


  public updatedAt!: Date;
}
