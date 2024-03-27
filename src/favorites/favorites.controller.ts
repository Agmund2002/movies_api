import { Body, Controller, Delete, Post } from '@nestjs/common'
import { FavoritesDto } from './favorites.dto'
import { FavoritesService } from './favorites.service'
import { MovieEntity } from 'src/movies/movie.entity'

@Controller('favorites')
export class FavoritesController {
  constructor(private favorites: FavoritesService) {}

  @Post()
  add(@Body() body: FavoritesDto): Promise<MovieEntity> {
    return this.favorites.add(body)
  }

  @Delete()
  delete(@Body() body: FavoritesDto): void {
    this.favorites.delete(body)
  }
}
