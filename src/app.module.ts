import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MovieModule } from './movies/movie.module'
import { UserModule } from './users/user.module'
import { FavoritesModule } from './favorites/favorites.module'

@Module({
  imports: [ConfigModule.forRoot(), MovieModule, UserModule, FavoritesModule]
})
export class AppModule {}
