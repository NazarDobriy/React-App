import { IsString } from 'class-validator';

export class TaskListDto {
  @IsString({ message: 'Value must be string' })
  readonly name: string;
}
