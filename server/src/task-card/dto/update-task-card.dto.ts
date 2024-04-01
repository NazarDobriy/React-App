import { PriorityLabelType, StatusType } from '../task-card.model';

export class UpdateTaskCardDto {
  readonly name: string;
  readonly description: string;
  readonly dueDate: Date;
  readonly priority: PriorityLabelType;
  readonly status: StatusType;
  readonly taskListId: number;
}
