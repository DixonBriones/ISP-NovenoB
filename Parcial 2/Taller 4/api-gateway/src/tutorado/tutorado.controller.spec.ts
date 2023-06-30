import { Test, TestingModule } from '@nestjs/testing';
import { TutoradoController } from './tutorado.controller';

describe('TutoradoController', () => {
  let controller: TutoradoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutoradoController],
    }).compile();

    controller = module.get<TutoradoController>(TutoradoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
