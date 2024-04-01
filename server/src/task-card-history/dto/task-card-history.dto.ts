import { IsDate, IsNotEmpty, IsString, Min } from 'class-validator';
import { ChangeType } from '../task-card-history.model';

export class TaskCardHistoryDto {
  readonly changeType: ChangeType;
  @IsString({ message: 'Value must be string' })
  readonly oldValue?: string;
  @IsString({ message: 'Value must be string' })
  readonly newValue?: string;
  @IsDate({ message: 'Value must be date' })
  readonly timestamp: Date;
  @IsNotEmpty()
  @Min(1)
  readonly taskCardId: number;
}
