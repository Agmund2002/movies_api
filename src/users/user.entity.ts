import { MovieEntity } from 'src/movies/movie.entity'
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @ManyToMany(() => MovieEntity)
  @JoinTable({
    name: 'favorites',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id'
    }
  })
  movies: MovieEntity[]
}
