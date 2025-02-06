import { Test, TestingModule } from '@nestjs/testing';
import { AuthlocalService } from './authlocal.service';

describe('AuthlocalService', () => {
  let service: AuthlocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthlocalService],
    }).compile();

    service = module.get<AuthlocalService>(AuthlocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
