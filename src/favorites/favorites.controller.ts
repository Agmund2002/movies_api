// import {
//   Controller,
//   Delete,
//   Get,
//   HttpException,
//   HttpStatus,
//   Param,
//   Patch
// } from '@nestjs/common'
// import { FavoritesService } from './favorites.service'
// import { MovieEntity } from 'src/movies/movie.entity'
// import { CurrentUser } from 'src/decorators/user.decorator'
// import { UserEntity } from 'src/users/user.entity'

// @Controller('movies/favorites')
// export class FavoritesController {
//   constructor(private favorites: FavoritesService) {}

//   @Get()
//   getAll(@CurrentUser('movies') movies: number[]): Promise<MovieEntity[]> {
//     return this.favorites.getAll(movies)
//   }

//   @Patch('add/:movieId')
//   async add(
//     @CurrentUser() user: UserEntity,
//     @Param('movieId') movieId: number
//   ): Promise<MovieEntity> {
//     const movie = await this.favorites.add(user, movieId)
//     if (!movie) {
//       throw new HttpException('Movie not found', HttpStatus.NOT_FOUND)
//     }
//     return movie
//   }

//   @Patch('delete/:movieId')
//   async delete(
//     @CurrentUser() user: UserEntity,
//     @Param('movieId') movieId: number
//   ): Promise<MovieEntity> {
//     const movie = await this.favorites.delete(user, movieId)
//     if (!movie) {
//       throw new HttpException('Movie not found', HttpStatus.NOT_FOUND)
//     }
//     return movie
//   }
// }
