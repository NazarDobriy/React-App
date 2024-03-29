import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common';
import { CreateTaskListDto } from './dto/create-task-list.dto';
import { TaskListService } from './task-list.service';
import { TaskList } from './task-list.model';
import { UpdateTaskListDto } from './dto/update-task-list.dto';

@Controller('tasks')
export class TaskListController {
  constructor(private taskListService: TaskListService) {}

  @Post()
  create(@Body() dto: CreateTaskListDto): Promise<TaskList> {
    return this.taskListService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<TaskList> {
    return this.taskListService.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTaskListDto
  ): Promise<TaskList> {
    return this.taskListService.update(id, dto);
  }

  @Get()
  getAll(): Promise<TaskList[]> {
    return this.taskListService.getAll();
  }
}
