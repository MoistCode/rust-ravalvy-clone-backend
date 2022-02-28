import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatternsModule } from 'src/patterns/patterns.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => PatternsModule)],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
