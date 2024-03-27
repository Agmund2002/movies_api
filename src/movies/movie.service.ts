import { Injectable } from '@nestjs/common'
import { MovieDto } from './movie.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { MovieEntity } from './movie.entity'
import { Repository } from 'typeorm'

@Injectable()
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

  create(body: MovieDto): Promise<MovieEntity> {
    return this.moviesRepo.save(body)
  }

  async update(id: number, body: Partial<MovieDto>): Promise<MovieEntity> {
    await this.moviesRepo.update(id, body)
    return this.moviesRepo.findOneBy({ id })
  }

  delete(id: number): void {
    this.moviesRepo.delete(id)
  }
}
