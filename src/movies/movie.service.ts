import { Injectable } from '@nestjs/common'
import { MovieCreateDto, MovieUpdateDto } from './movie.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { MovieEntity } from './movie.entity'
import { DeleteResult, Repository } from 'typeorm'

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity) private moviesRepo: Repository<MovieEntity>
  ) {}

  getAll(): Promise<MovieEntity[]> {
    return this.moviesRepo.find()
  }

  getById(id: number): Promise<MovieEntity | null> {
    return this.moviesRepo.findOneBy({ id })
  }

  async create(body: MovieCreateDto): Promise<MovieEntity | string> {
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
