import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { TaskCard } from 'src/task-card/task-card.model';

export type ChangeType =
  | 'CREATE'
  | 'RENAME'
  | 'DESCRIPTION'
  | 'STATUS'
  | 'PRIORITY'
  | 'DUE_DATE'
  | 'DELETE';

interface TaskCardHistoryCreationAttr {
  changeType: ChangeType;
  oldValue?: string | Date;
  newValue?: string | Date;
  timestamp: Date;
  taskCardId: number;
}

@Table({ tableName: 'TaskCardHistory' })
export class TaskCardHistory extends Model<
  TaskCardHistory,
  TaskCardHistoryCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.ENUM(
      'CREATE',
      'RENAME',
      'DESCRIPTION',
      'STATUS',
      'PRIORITY',
      'DUE_DATE',
      'DELETE'
    ),
    allowNull: false
  })
  changeType: ChangeType;

  @Column({
    type: DataType.JSON,
    allowNull: true
  })
  oldValue: string;

  @Column({
    type: DataType.JSON,
    allowNull: true
  })
  newValue: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  timestamp: Date;

  @ForeignKey(() => TaskCard)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  taskCardId: number;

  @BelongsTo(() => TaskCard)
  taskCard: TaskCard;
}
