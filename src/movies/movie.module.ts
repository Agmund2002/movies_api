import { Module } from '@nestjs/common'
import { MovieController } from './movie.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MovieEntity } from './movie.entity'
import { MovieService } from './movie.service'

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [TypeOrmModule]
})
export class MovieModule {}
