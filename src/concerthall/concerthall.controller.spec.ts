import { Test, TestingModule } from '@nestjs/testing';
import { ConcerthallController } from './concerthall.controller';

describe('ConcerthallController', () => {
  let controller: ConcerthallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcerthallController],
    }).compile();

    controller = module.get<ConcerthallController>(ConcerthallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
