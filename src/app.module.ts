import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { MovieEntity } from './m/movie.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPE,
      host: process.env.HOST,
      port: process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [MovieEntity],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
