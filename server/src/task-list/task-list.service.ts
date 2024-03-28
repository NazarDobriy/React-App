import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskList } from './task-list.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskListDto } from './dto/create-task-list.dto';
import { UpdateTaskListDto } from './dto/update-task-list.dto';

@Injectable()
export class TaskListService {
  constructor(
    @InjectModel(TaskList) private taskListRepository: typeof TaskList
  ) {}

  async create(dto: CreateTaskListDto): Promise<TaskList> {
    const taskList = await this.taskListRepository.create(dto);
    return taskList;
  }

  async delete(id: number): Promise<void> {
    const taskList = await this.taskListRepository.findByPk(id);
    if (!taskList) {
      throw new NotFoundException(`Task list with ID ${id} not found`);
    }
    await taskList.destroy();
  }

  async update(id: number, dto: UpdateTaskListDto): Promise<TaskList> {
    const taskList = await this.taskListRepository.findByPk(id);
    if (!taskList) {
      throw new NotFoundException(`Task list with ID ${id} not found`);
    }

    await taskList.update(dto);
    return taskList;
  }

  async getAll(): Promise<TaskList[]> {
    const taskLists = await this.taskListRepository.findAll();
    return taskLists;
  }
}
