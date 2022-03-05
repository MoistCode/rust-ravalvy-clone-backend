import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsAlpha()
  @Field()
  firstName: string;

  @IsAlpha()
  @Field()
  lastName: string;

  @MinLength(12, {
    message: 'Password needs to be between 12 and 100 characters',
  })
  @MaxLength(100, {
    message: 'Password needs to be between 12 and 100 characters',
  })
  @Field()
  password: string;

  @Field()
  username: string;
}
