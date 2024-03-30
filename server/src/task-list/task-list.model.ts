import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { TaskCard } from 'src/task-card/task-card.model';

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

  @HasMany(() => TaskCard)
  taskCards: TaskCard[];
}
