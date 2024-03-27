import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put
} from '@nestjs/common'
import { MovieDto } from './movie.dto'
import { MovieService } from './movie.service'
import { MovieEntity } from './movie.entity'

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  getAll(): Promise<MovieEntity[]> {
    return this.movieService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<MovieEntity> {
    return this.movieService.getById(id)
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: MovieDto): Promise<MovieEntity> {
    return this.movieService.create(body)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() body: Partial<MovieDto>
  ): Promise<MovieEntity> {
    return this.movieService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.movieService.delete(id)
  }
}
