import { Body, Controller, Post } from '@nestjs/common';
import { TaskCardHistoryService } from './task-card-history.service';
import { TaskCardHistoryDto } from './dto/task-card-history.dto';
import { TaskCardHistory } from './task-card-history.model';

@Controller('task-card-history')
export class TaskCardHistoryController {
  constructor(private taskCardHistoryService: TaskCardHistoryService) {}

  @Post()
  create(@Body() dto: TaskCardHistoryDto): Promise<TaskCardHistory> {
    return this.taskCardHistoryService.create(dto);
  }
}
