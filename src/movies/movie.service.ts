import { Injectable } from '@nestjs/common'
import { MovieCreateDto, MovieUpdateDto } from './movie.dto'
import { MovieEntity } from './movie.entity'
import { DeleteResult } from 'typeorm'
import { PrismaService } from 'src/prisma/prisma.service'
import { Movie, Prisma } from '@prisma/client'

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  getAll(): Promise<Movie[]> {
    return this.prisma.movie.findMany()
  }

  getById(id: number): Promise<MovieEntity | null> {
    return this.prisma.movie.findUnique()
  }

  async create(body: Prisma.MovieCreateInput): Promise<Movie> {
    try {
      const movie = await this.moviesRepo.save(body)
      return movie
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return error.message
      }
    }
  }

  async update(
    id: number,
    body: MovieUpdateDto
  ): Promise<MovieEntity | null | string> {
    try {
      await this.moviesRepo.update(id, body)
      return this.moviesRepo.findOneBy({ id })
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return error.message
      }
    }
  }

  delete(id: number): Promise<DeleteResult> {
    return this.moviesRepo.delete(id)
  }
}
