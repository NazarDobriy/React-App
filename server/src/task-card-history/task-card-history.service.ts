import { Injectable } from '@nestjs/common';
import { TaskCardHistory } from './task-card-history.model';
import { InjectModel } from '@nestjs/sequelize';
import { TaskCardHistoryDto } from './dto/task-card-history.dto';

@Injectable()
export class TaskCardHistoryService {
  constructor(
    @InjectModel(TaskCardHistory)
    private taskCardHistoryRepository: typeof TaskCardHistory
  ) {}

  async create(dto: TaskCardHistoryDto): Promise<TaskCardHistory> {
    const taskCardHistory = await this.taskCardHistoryRepository.create(dto);
    return taskCardHistory;
  }
}
