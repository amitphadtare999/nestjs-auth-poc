import { Test, TestingModule } from '@nestjs/testing';
import { AuthlocalController } from './authlocal.controller';

describe('AuthlocalController', () => {
  let controller: AuthlocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthlocalController],
    }).compile();

    controller = module.get<AuthlocalController>(AuthlocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
