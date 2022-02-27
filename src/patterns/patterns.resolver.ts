import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Pattern } from './models/pattern.model';
import { PatternsService } from './patterns.service';

@Resolver((of) => Pattern)
export class PatternsResolver {
  constructor(private patternsService: PatternsService) {}

  @Query((returns) => Pattern, { name: 'pattern' })
  async getPattern(@Args('id', { type: () => Int }) id: number) {
    return this.patternsService.findOneById(id);
  }
}
