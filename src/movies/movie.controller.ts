import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
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
  async getById(@Param('id') id: number): Promise<MovieEntity> {
    const movie = await this.movieService.getById(id)
    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND)
    }
    return movie
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: MovieDto): Promise<MovieEntity> {
    return this.movieService.create(body)
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: Partial<MovieDto>
  ): Promise<MovieEntity> {
    const movie = await this.movieService.update(id, body)
    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND)
    }
    return movie
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<void> {
    const movie = await this.movieService.delete(id)
    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND)
    }
  }
}
