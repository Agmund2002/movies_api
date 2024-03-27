import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { UserUpdateDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>
  ) {}

  getById(id: number): Promise<Omit<UserEntity, 'password'>> {
    return this.userRepo.findOneBy({ id })
  }

  async update(
    id: number,
    body: UserUpdateDto
  ): Promise<Omit<UserEntity, 'password'>> {
    await this.userRepo.update(id, body)
    return this.userRepo.findOneBy({ id })
  }
}
