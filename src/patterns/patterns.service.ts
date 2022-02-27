import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pattern } from './models/pattern.model';

@Injectable()
export class PatternsService {
  constructor(
    @InjectRepository(Pattern)
    private patternRepository: Repository<Pattern>,
  ) {}

  findOneById(id: number): Promise<Pattern> {
    return this.patternRepository.findOne(id);
  }
}
