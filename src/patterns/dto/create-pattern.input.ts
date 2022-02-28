import { Field, InputType, Int } from '@nestjs/graphql';
import { IsFQDN } from 'class-validator';

@InputType()
export class CreatePatternInput {
  @Field((type) => Int)
  authorId: number;

  @Field({ nullable: true })
  @IsFQDN()
  highlightImageUrl?: string;

  @Field()
  title: string;
}
