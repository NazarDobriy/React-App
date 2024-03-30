import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { TaskList } from 'src/task-list/task-list.model';

export type PriorityLabelType = 'Low' | 'Medium' | 'High';

interface TaskCardCreationAttr {
  name: string;
  description: string;
  dueDate: Date;
  priority: PriorityLabelType;
  taskListId: number;
}

@Table({ tableName: 'TaskCard' })
export class TaskCard extends Model<TaskCard, TaskCardCreationAttr> {
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

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  dueDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  priority: PriorityLabelType;

  @ForeignKey(() => TaskList)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  taskListId: number;

  @BelongsTo(() => TaskList)
  taskList: TaskList;
}
