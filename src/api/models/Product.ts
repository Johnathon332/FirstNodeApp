import { Model } from 'sequelize/types';
import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
  IsDate,
  NotEmpty,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  public id!: number;

  @Column(DataType.STRING)
  @AllowNull(false)
  @NotEmpty
  public name!: string;

  @Column(DataType.DECIMAL)
  @AllowNull(false)
  @NotEmpty
  public price!: number;

  @CreatedAt
  public readonly createdAt!: Date;

  @UpdatedAt
  public readonly updatedAt!: Date;
}
