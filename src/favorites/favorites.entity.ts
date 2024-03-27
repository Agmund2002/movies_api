import { Column, Entity } from 'typeorm'

@Entity()
export class FavoritesEntity {
  @Column()
  movie_id: number

  @Column()
  user_id: number
}
