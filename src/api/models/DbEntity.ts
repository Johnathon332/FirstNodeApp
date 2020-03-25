import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class DbEntity {
  @PrimaryGeneratedColumn()
  public id?: number | undefined;

  @CreateDateColumn()
  public readonly createdAt?: Date | undefined;

  @UpdateDateColumn()
  public readonly updatedAt?: Date | undefined;
}
