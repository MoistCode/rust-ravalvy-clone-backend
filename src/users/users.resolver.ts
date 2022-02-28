import { Resolver, Query, Mutation, Args, Int, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  patterns(@Parent() author: User): Promise<Pattern[]> {
    return this.usersService.findPatterns(author.id);
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }
}
