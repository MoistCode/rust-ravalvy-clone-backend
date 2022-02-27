import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pattern } from './patterns.entity';
import { PatternsResolver } from './patterns.resolver';
import { PatternsService } from './patterns.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pattern])],
  providers: [PatternsResolver, PatternsService],
})
export class PatternsModule {}
