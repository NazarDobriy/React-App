import { IsDate, IsIn, IsNotEmpty, IsString, Min } from 'class-validator';
import { PriorityLabelType, StatusType } from '../task-card.model';

export class TaskCardDto {
  @IsString({ message: 'Value must be string' })
  readonly name: string;
  @IsString({ message: 'Value must be string' })
  readonly description: string;
  @IsDate({ message: 'Value must be date' })
  readonly dueDate: Date;
  @IsIn(['Low', 'Medium', 'High'])
  readonly priority: PriorityLabelType;
  @IsIn(['To do', 'Planned', 'In process', 'Closed'])
  readonly status: StatusType;
  @IsNotEmpty()
  @Min(1)
  readonly taskListId: number;
}
