import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskCard } from 'src/task-card/task-card.model';
import { TaskList } from 'src/task-list/task-list.model';
import { TaskCardHistory } from './task-card-history.model';
import { TaskCardHistoryService } from './task-card-history.service';
import { TaskCardHistoryController } from './task-card-history.controller';

@Module({
  imports: [SequelizeModule.forFeature([TaskList, TaskCard, TaskCardHistory])],
  providers: [TaskCardHistoryService],
  controllers: [TaskCardHistoryController]
})
export class TaskCardHistoryModule {}
