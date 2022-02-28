import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreatePatternInput } from './dto/create-pattern.input';
import { Pattern } from './patterns.entity';

@Injectable()
export class PatternsService {
  constructor(
    @InjectRepository(Pattern) private patternsRepository: Repository<Pattern>,
    private usersService: UsersService,
  ) {}

  create(createPatternInput: CreatePatternInput): Promise<Pattern> {
    const newPattern = this.patternsRepository.create(createPatternInput);

    return this.patternsRepository.save(newPattern);
  }

  findOneById(id: number): Promise<Pattern> {
    return this.patternsRepository.findOne(id);
  }

  findOwner(ownerId: number): Promise<User> {
    return this.usersService.findOneById(ownerId);
  }
}
