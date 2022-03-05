import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pattern } from 'src/patterns/patterns.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  username: string;

  @OneToMany(() => Pattern, (pattern) => pattern.author)
  @Field((type) => [Pattern], { nullable: true })
  patterns?: Pattern[];
}
