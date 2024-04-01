import { Test, TestingModule } from '@nestjs/testing';
import { TaskCardHistoryService } from './task-card-history.service';

describe('TaskCardHistoryService', () => {
  let service: TaskCardHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskCardHistoryService]
    }).compile();

    service = module.get<TaskCardHistoryService>(TaskCardHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
