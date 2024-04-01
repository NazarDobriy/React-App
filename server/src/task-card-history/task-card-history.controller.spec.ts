import { Test, TestingModule } from '@nestjs/testing';
import { TaskCardHistoryController } from './task-card-history.controller';

describe('TaskCardHistoryController', () => {
  let controller: TaskCardHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskCardHistoryController]
    }).compile();

    controller = module.get<TaskCardHistoryController>(
      TaskCardHistoryController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
