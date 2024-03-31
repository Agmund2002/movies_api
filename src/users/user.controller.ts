import { Controller, Get, Put, Body, Delete, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './user.dto'
import { UserEntity } from './user.entity'
import { CurrentUser } from 'src/decorators/user.decorator'

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  profile(@CurrentUser() user: UserEntity): Pick<UserEntity, 'id' | 'email'> {
    const { id, email } = user
    return {
      id,
      email
    }
  }

  @Put()
  update(
    @CurrentUser('id') id: number,
    @Body() body: Partial<UserDto>
  ): Promise<Pick<UserEntity, 'id' | 'email'>> {
    return this.userService.update(id, body)
  }

  @Delete()
  @HttpCode(204)
  delete(@CurrentUser('id') id: number): void {
    this.userService.delete(id)
  }
}
