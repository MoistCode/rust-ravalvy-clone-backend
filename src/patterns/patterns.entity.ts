import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'pattern' })
export class Pattern {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @Column()
  highlightImageUrl: string;

  @Column()
  homepageUrl: string;

  @Column()
  numFavorites: number;

  @Column()
  title: string;
}
