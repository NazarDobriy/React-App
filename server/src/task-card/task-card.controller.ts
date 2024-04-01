import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common';
import { TaskCard } from './task-card.model';
import { TaskCardService } from './task-card.service';
import { TaskCardDto } from './dto/task-card.dto';

@Controller('task-card')
export class TaskCardController {
  constructor(private taskCardService: TaskCardService) {}

  @Post()
  create(@Body() dto: TaskCardDto): Promise<TaskCard> {
    return this.taskCardService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: TaskCardDto
  ): Promise<TaskCard> {
    return this.taskCardService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<TaskCard> {
    return this.taskCardService.delete(id);
  }
}
