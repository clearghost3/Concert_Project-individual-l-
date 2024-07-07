import { Test, TestingModule } from '@nestjs/testing';
import { ConcerthallService } from './concerthall.service';

describe('ConcerthallService', () => {
  let service: ConcerthallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcerthallService],
    }).compile();

    service = module.get<ConcerthallService>(ConcerthallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
