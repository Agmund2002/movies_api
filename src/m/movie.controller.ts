import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param
} from '@nestjs/common'
import { MovieCreateDto, MovieUpdateDto } from './movie.dto'

@Controller('movies')
export class MovieController {
  @Get()
  getAll(): Array {
    return []
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
