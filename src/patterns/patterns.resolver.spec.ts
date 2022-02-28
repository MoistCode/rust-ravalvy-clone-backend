import { Test, TestingModule } from '@nestjs/testing';
import { PatternsResolver } from './patterns.resolver';

describe('PatternsResolver', () => {
  let resolver: PatternsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatternsResolver],
    }).compile();

    resolver = module.get<PatternsResolver>(PatternsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
