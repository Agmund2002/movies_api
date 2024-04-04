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
import { MovieService } from './movie.service'
import { Movie, Prisma } from '@prisma/client'
import { MovieCreateDto, MovieUpdateDto } from './movie.dto'
import { ErrorHandler } from 'src/helpers/error.catcher'
import { IsEmptyBody } from 'src/decorators/is-empty-body.decorator'

@Controller('movies')
export class MovieController extends ErrorHandler {
  constructor(private movieService: MovieService) {
    super()
  }

  @Get()
  getAll(): Promise<Movie[]> {
    return this.movieService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Movie> {
    const movie = await this.movieService.getById(Number(id))
    if (!movie) throw new HttpException('Movie not found', HttpStatus.NOT_FOUND)

    return movie
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: MovieCreateDto): Promise<Movie> {
    try {
      const movie = await this.movieService.create(body)
      return movie
    } catch (error) {
      this.giveCurrentResponse(error)
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() @IsEmptyBody(MovieCreateDto) body: MovieUpdateDto
  ): Promise<Movie> {
    try {
      const movie = await this.movieService.update(Number(id), body)
      return movie
    } catch (error) {
      this.giveCurrentResponse(error)
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<void> {
    try {
      await this.movieService.delete(Number(id))
    } catch (error) {
      this.giveCurrentResponse(error)
    }
  }
}
