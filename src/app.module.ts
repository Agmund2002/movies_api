import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { MovieEntity } from './movies/movie.entity'
import { UserEntity } from './users/user.entity'
import { MovieModule } from './movies/movie.module'
import { UserModule } from './users/user.module'
import { FavoritesModule } from './favorites/favorites.module'
import { FavoritesEntity } from './favorites/favorites.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [MovieEntity, UserEntity, FavoritesEntity],
      synchronize: true
    }),
    MovieModule,
    UserModule,
    FavoritesModule
  ]
})
export class AppModule {}
