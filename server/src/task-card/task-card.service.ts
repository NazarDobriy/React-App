import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaskCard } from './task-card.model';
import { TaskCardDto } from './dto/task-card.dto';

@Injectable()
export class TaskCardService {
  constructor(
    @InjectModel(TaskCard) private taskCardRepository: typeof TaskCard
  ) {}

  async create(dto: TaskCardDto): Promise<TaskCard> {
    const taskCard = await this.taskCardRepository.create(dto);
    return taskCard;
  }

  async delete(id: number): Promise<TaskCard> {
    const taskCard = await this.taskCardRepository.findByPk(id);
    if (!taskCard) {
      throw new NotFoundException(`Task card with ID ${id} not found`);
    }
    await taskCard.destroy();
    return taskCard;
  }

  async update(id: number, dto: TaskCardDto): Promise<TaskCard> {
    const taskCard = await this.taskCardRepository.findByPk(id);
    if (!taskCard) {
      throw new NotFoundException(`Task card with ID ${id} not found`);
    }

    await taskCard.update(dto);
    return taskCard;
  }
}
