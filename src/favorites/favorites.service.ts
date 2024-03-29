// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { FavoritesEntity } from './favorites.entity'
// import { Repository } from 'typeorm'
// import { FavoritesDto } from './favorites.dto'
// import { MovieEntity } from 'src/movies/movie.entity'

// @Injectable()
// export class FavoritesService {
//   constructor(
//     @InjectRepository(FavoritesEntity)
//     private favoritesRepo: Repository<FavoritesEntity>,
//     @InjectRepository(MovieEntity) private moviesRepo: Repository<MovieEntity>
//   ) {}

//   async add(body: FavoritesDto): Promise<MovieEntity> {
//     await this.favoritesRepo.save(body)
//     return this.moviesRepo.findOneBy({ id: body.movie_id })
//   }

//   delete(body: FavoritesDto): void {
//     const { user_id, movie_id } = body
//     this.favoritesRepo.delete({ user_id, movie_id })
//   }
// }
