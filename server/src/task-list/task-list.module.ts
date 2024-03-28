import { Module } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { TaskListController } from './task-list.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskList } from './task-list.model';

@Module({
  providers: [TaskListService],
  controllers: [TaskListController],
  imports: [SequelizeModule.forFeature([TaskList])]
})
export class TaskListModule {}
