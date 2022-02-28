import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { CreatePatternInput } from './dto/create-pattern.input';
import { Pattern } from './patterns.entity';
import { PatternsService } from './patterns.service';

@Resolver((of) => Pattern)
export class PatternsResolver {
  constructor(private patternsService: PatternsService) {}

  @ResolveField((returns) => User)
  author(@Parent() pattern: Pattern): Promise<User> {
    return this.patternsService.findOwner(pattern.authorId);
  }

  @Query((returns) => Pattern, { name: 'pattern' })
  getPatternById(@Args('id', { type: () => Int }) id: number) {
    return this.patternsService.findOneById(id);
  }

  @Mutation((returns) => Pattern)
  createPattern(
    @Args('createPatternInput') createPatternInput: CreatePatternInput,
  ): Promise<Pattern> {
    return this.patternsService.create(createPatternInput);
  }
}
