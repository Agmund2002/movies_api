import { Injectable } from '@nestjs/common'
import { MovieCreateDto, MovieDto, MovieUpdateDto } from './movie.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { MovieEntity } from './movie.entity'
import { Repository } from 'typeorm'

@Injectable
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity) private moviesRepo: Repository<MovieEntity>
  ) {}

  getAll(): Promise<MovieEntity[]> {
    return this.moviesRepo.find()
  }

  getById(id: number): Promise<MovieEntity> {
    return this.moviesRepo.findOneBy({ id })
  }

  create(body: MovieCreateDto): Promise<MovieEntity> {
    return this.moviesRepo.create(body)
  }

  update(id: number, body: MovieUpdateDto): Promise<MovieEntity> {
    return this.moviesRepo.update(body)
  }

  delete(id: number): void {
    this.moviesRepo.delete(id)
  }
}
