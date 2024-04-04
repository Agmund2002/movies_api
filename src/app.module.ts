import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MovieModule } from './movies/movie.module'
import { LoggerMiddleware } from './middlewares/log.middleware'
import { MovieController } from './movies/movie.controller'
import { IsEmptyBody } from './decorators/is-empty-body.decorator'
// import { UserModule } from './users/user.module'
// import { FavoritesModule } from './favorites/favorites.module'

@Module({
  imports: [ConfigModule.forRoot(), MovieModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(IsEmptyBody).forRoutes(MovieController)
  }
}
