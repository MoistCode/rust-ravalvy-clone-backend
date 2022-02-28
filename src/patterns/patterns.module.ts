import { Module } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { PatternsResolver } from './patterns.resolver';
import { Pattern } from './patterns.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pattern]), UsersModule],
  providers: [PatternsService, PatternsResolver],
})
export class PatternsModule {}
