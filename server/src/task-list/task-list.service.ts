import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskList } from './task-list.model';
import { InjectModel } from '@nestjs/sequelize';
import { TaskListDto } from './dto/task-list.dto';
import { TaskCard } from 'src/task-card/task-card.model';
import { TaskCardHistory } from 'src/task-card-history/task-card-history.model';

@Injectable()
export class TaskListService {
  constructor(
    @InjectModel(TaskList) private taskListRepository: typeof TaskList
  ) {}

  async create(dto: TaskListDto): Promise<TaskList> {
    const taskList = await this.taskListRepository.create(dto, {
      include: [
        {
          model: TaskCard,
          include: [
            {
              model: TaskCardHistory,
              order: [['createdAt', 'ASC']]
            }
          ],
          order: [['createdAt', 'ASC']]
        }
      ],
      order: [['createdAt', 'ASC']]
    });
    return taskList;
  }

  async delete(id: number): Promise<TaskList> {
    const taskList = await this.taskListRepository.findByPk(id, {
      include: [
        {
          model: TaskCard,
          include: [
            {
              model: TaskCardHistory,
              order: [['createdAt', 'ASC']]
            }
          ],
          order: [['createdAt', 'ASC']]
        }
      ],
      order: [['createdAt', 'ASC']]
    });
    if (!taskList) {
      throw new NotFoundException(`Task list with ID ${id} not found`);
    }
    await taskList.destroy();
    return taskList;
  }

  async update(id: number, dto: TaskListDto): Promise<TaskList> {
    const taskList = await this.taskListRepository.findByPk(id, {
      include: [
        {
          model: TaskCard,
          include: [
            {
              model: TaskCardHistory,
              order: [['createdAt', 'ASC']]
            }
          ],
          order: [['createdAt', 'ASC']]
        }
      ],
      order: [['createdAt', 'ASC']]
    });
    if (!taskList) {
      throw new NotFoundException(`Task list with ID ${id} not found`);
    }

    await taskList.update(dto);
    return taskList;
  }

  async getAll(): Promise<TaskList[]> {
    const taskLists = await this.taskListRepository.findAll({
      include: [
        {
          model: TaskCard,
          include: [
            {
              model: TaskCardHistory,
              order: [['createdAt', 'ASC']]
            }
          ],
          order: [['createdAt', 'ASC']]
        }
      ],
      order: [['createdAt', 'ASC']]
    });
    return taskLists;
  }
}
