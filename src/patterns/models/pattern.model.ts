import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pattern {
  @Field((type) => Int)
  id: number;

  @Field()
  createdAt: string;

  @Field()
  highlightImageUrl: string;

  @Field()
  homepageUrl: string;

  @Field()
  numFavorites: number;

  @Field()
  title: string;
}
