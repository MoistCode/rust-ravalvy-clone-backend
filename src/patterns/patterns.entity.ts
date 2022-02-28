import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Pattern {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @ManyToOne(() => User, (user) => user.patterns)
  @Field((type) => User)
  author: User;

  @Column()
  @Field((type) => Int)
  authorId: number;

  @CreateDateColumn()
  @Field()
  createdAt: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  highlightImageUrl?: string;

  @Column({ default: 'default-homepageurl' })
  @Field()
  homepageUrl: string;

  @Column({ default: 0 })
  @Field()
  numFavorites: number;

  @Column()
  @Field()
  title: string;
}
