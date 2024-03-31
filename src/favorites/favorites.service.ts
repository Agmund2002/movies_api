import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { MovieEntity } from 'src/movies/movie.entity'
import { UserEntity } from 'src/users/user.entity'

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(UserEntity)
    private favoritesRepo: Repository<UserEntity>,
    @InjectRepository(MovieEntity)
    private moviesRepo: Repository<MovieEntity>
  ) {}

  getAll(movies: number[]): Promise<MovieEntity[]> {
    return this.moviesRepo.find({
      where: {
        id: In(movies)
      }
    })
  }

  async add(user: UserEntity, movieId: number): Promise<MovieEntity> | null {
    const movie = await this.moviesRepo.findOneBy({ id: movieId })
    if (!movie) {
      return null
    }

    const movieInFavorites = user.movies.find(id => id === movieId)
    if (movieInFavorites) {
      return movie
    }

    const query = this.favoritesRepo
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        movies: () => `movies || ${JSON.stringify([movieId])}`
      })
      .where('id = :id', { id: user.id })
    await query.execute()

    return movie
  }

  async delete(user: UserEntity, movieId: number): Promise<MovieEntity> | null {
    const movie = await this.moviesRepo.findOneBy({ id: movieId })
    if (!movie) {
      return null
    }

    const movieInFavorites = user.movies.find(id => id === movieId)
    if (!movieInFavorites) {
      return null
    }

    const query = this.favoritesRepo
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        movies: () => `array_remove(movies, ${movieId})`
      })
      .where('id = :id', { id: user.id })

    await query.execute()

    return movie
  }
}
