import { Model } from 'sequelize/types';
import {
  Table,
  Column,
  NotNull,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from './Product';

@Table
export class Order extends Model<Order> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @ForeignKey(() => Product)
  @Column
  public productId!: number;

  @BelongsTo(() => Product)
  public product!: Product;

  @Column(DataType.NUMBER)
  public quantity!: number;

  @CreatedAt
  public createdAt!: Date;

  @UpdatedAt
  public updatedAt!: Date;
}
