import { Test, TestingModule } from '@nestjs/testing';
import { TaskCardController } from './task-card.controller';

describe('TaskCardController', () => {
  let controller: TaskCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskCardController]
    }).compile();

    controller = module.get<TaskCardController>(TaskCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
