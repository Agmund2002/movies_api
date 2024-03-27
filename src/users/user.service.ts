import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private usersRepo: Repository<UserEntity>
  ) {}

  getById(id: number): Promise<Omit<UserEntity, 'password'>> {
    return this.usersRepo.findOneBy({ id })
  }

  async update(
    id: number,
    body: Partial<UserDto>
  ): Promise<Pick<UserEntity, 'id' | 'email'>> {
    await this.usersRepo.update(id, body)
    return this.usersRepo.findOneBy({ id })
  }
}
