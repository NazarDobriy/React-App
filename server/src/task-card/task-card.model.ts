import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table
} from 'sequelize-typescript';
import { TaskCardHistory } from 'src/task-card-history/task-card-history.model';
import { TaskList } from 'src/task-list/task-list.model';

export type StatusType = 'To do' | 'Planned' | 'In process' | 'Closed';
export type PriorityLabelType = 'Low' | 'Medium' | 'High';

interface TaskCardCreationAttr {
  name: string;
  description: string;
  dueDate: Date;
  priority: PriorityLabelType;
  status: StatusType;
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
    allowNull: false,
    defaultValue: 'Low'
  })
  priority: PriorityLabelType;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'To do'
  })
  status: StatusType;

  @ForeignKey(() => TaskList)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  taskListId: number;

  @BelongsTo(() => TaskList)
  taskList: TaskList;

  @HasMany(() => TaskCardHistory)
  taskCardHistories: TaskCardHistory[];
}
