import { Controller } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './user.dto'
import { UserEntity } from './user.entity'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  // Для id треба декоратор який надасть доступ до req.user
  current(id: number): Promise<Omit<UserEntity, 'password'>> {
    const { password, ...user } = req.user
    return user
  }
  @Put()
  update(
    id: number, // Тут те саме
    @Body() body: Partial<UserDto>
  ): Promise<Pick<UserEntity, 'id' | 'email'>> {
    return this.userService.update(id, body)
  }
}
