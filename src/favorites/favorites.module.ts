import { Module } from '@nestjs/common'
import { FavoritesController } from './favorites.controller'
import { FavoritesService } from './favorites.service'
import { UserModule } from 'src/users/user.module'
import { MovieModule } from 'src/movies/movie.module'

@Module({
  // imports: [UserModule, MovieModule],
  controllers: [FavoritesController],
  providers: [FavoritesService]
})
export class FavoritesModule {}
