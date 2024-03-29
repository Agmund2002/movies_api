import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { MovieEntity } from './movies/movie.entity'
import { MovieModule } from './movies/movie.module'
// import { UserModule } from './users/user.module'
// import { FavoritesModule } from './favorites/favorites.module'
// import { FavoritesEntity } from './favorites/favorites.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [MovieEntity],
      synchronize: true
    }),
    MovieModule
    // UserModule
    // FavoritesModule
  ]
})
export class AppModule {}
