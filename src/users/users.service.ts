import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pattern } from 'src/patterns/patterns.entity';
import { PatternsService } from 'src/patterns/patterns.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @Inject(forwardRef(() => PatternsService))
    private patternsService: PatternsService,
  ) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUserInput);

    return this.usersRepository.save(newUser);
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findPatterns(id: number): Promise<Pattern[]> {
    return this.patternsService.findPatternsByAuthorId(id);
  }
}
