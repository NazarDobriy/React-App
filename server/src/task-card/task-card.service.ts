import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaskCard } from './task-card.model';
import { TaskCardDto } from './dto/task-card.dto';
import { TaskCardHistory } from 'src/task-card-history/task-card-history.model';

@Injectable()
export class TaskCardService {
  constructor(
    @InjectModel(TaskCard) private taskCardRepository: typeof TaskCard,
    @InjectModel(TaskCardHistory)
    private taskCardHistoryRepository: typeof TaskCardHistory
  ) {}

  async create(dto: TaskCardDto): Promise<TaskCard> {
    const taskCard = await this.taskCardRepository.create(dto);

    await this.taskCardHistoryRepository.create({
      changeType: 'CREATE',
      timestamp: taskCard.updatedAt,
      taskCardId: taskCard.id
    });

    await taskCard.reload({
      include: {
        model: TaskCardHistory
      }
    });

    return taskCard;
  }

  async delete(id: number): Promise<TaskCard> {
    const taskCard = await this.taskCardRepository.findByPk(id);
    if (!taskCard) {
      throw new NotFoundException(`Task card with ID ${id} not found`);
    }

    await this.taskCardHistoryRepository.create({
      changeType: 'DELETE',
      timestamp: taskCard.updatedAt,
      taskCardId: taskCard.id
    });

    await taskCard.reload({
      include: {
        model: TaskCardHistory
      }
    });

    await taskCard.destroy();
    return taskCard;
  }

  async update(id: number, dto: TaskCardDto): Promise<TaskCard> {
    const taskCard = await this.taskCardRepository.findByPk(id);

    if (!taskCard) {
      throw new NotFoundException(`Task card with ID ${id} not found`);
    }

    if (dto.name !== taskCard.name) {
      await this.taskCardHistoryRepository.create({
        changeType: 'RENAME',
        oldValue: taskCard.name,
        newValue: dto.name,
        timestamp: taskCard.updatedAt,
        taskCardId: taskCard.id
      });
    }

    if (dto.description !== taskCard.description) {
      await this.taskCardHistoryRepository.create({
        changeType: 'DESCRIPTION',
        oldValue: taskCard.description,
        newValue: dto.description,
        timestamp: taskCard.updatedAt,
        taskCardId: taskCard.id
      });
    }

    if (!this.areDatesEqual(new Date(dto.dueDate), taskCard.dueDate)) {
      await this.taskCardHistoryRepository.create({
        changeType: 'DUE_DATE',
        oldValue: taskCard.dueDate,
        newValue: dto.dueDate,
        timestamp: taskCard.updatedAt,
        taskCardId: taskCard.id
      });
    }

    if (dto.status !== taskCard.status) {
      await this.taskCardHistoryRepository.create({
        changeType: 'STATUS',
        oldValue: taskCard.status,
        newValue: dto.status,
        timestamp: taskCard.updatedAt,
        taskCardId: taskCard.id
      });
    }

    if (dto.priority !== taskCard.priority) {
      await this.taskCardHistoryRepository.create({
        changeType: 'PRIORITY',
        oldValue: taskCard.priority,
        newValue: dto.priority,
        timestamp: taskCard.updatedAt,
        taskCardId: taskCard.id
      });
    }

    await taskCard.update(dto);

    await taskCard.reload({
      include: {
        model: TaskCardHistory
      }
    });

    return taskCard;
  }

  private areDatesEqual(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
}
