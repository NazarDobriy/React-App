import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'TaskList' })
export class TaskList extends Model<TaskList, { name: string }> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;
}
