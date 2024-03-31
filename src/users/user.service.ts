import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { DeleteResult, Repository } from 'typeorm'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private usersRepo: Repository<UserEntity>
  ) {}

  async update(
    id: number,
    body: Partial<UserDto>
  ): Promise<Pick<UserEntity, 'id' | 'email'> | string> {
    try {
      await this.usersRepo.update(id, body)
      const { email } = await this.usersRepo.findOneBy({ id })
      return { id, email }
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return error.message
      }
    }
  }

  delete(id: number): Promise<DeleteResult> {
    return this.usersRepo.delete(id)
  }
}
