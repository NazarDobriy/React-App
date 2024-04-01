import { Module } from '@nestjs/common';
import { TaskCardService } from './task-card.service';
import { TaskCardController } from './task-card.controller';
import { TaskCard } from './task-card.model';
import { TaskList } from 'src/task-list/task-list.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskCardHistory } from 'src/task-card-history/task-card-history.model';

@Module({
  providers: [TaskCardService],
  controllers: [TaskCardController],
  imports: [SequelizeModule.forFeature([TaskList, TaskCard, TaskCardHistory])]
})
export class TaskCardModule {}
