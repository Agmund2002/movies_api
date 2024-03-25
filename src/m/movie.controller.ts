import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common'
import { MovieCreateDto, MovieDto, MovieUpdateDto } from './movie.dto'
import { MovieService } from './movie.service'

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  getAll(): MovieDto[] {
    return this.movieService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string): Object {
    return {}
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: MovieCreateDto): Object {
    return {}
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: MovieUpdateDto): Object {
    return {}
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): Object {}
}
