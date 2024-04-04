// import {
//   Controller,
//   Get,
//   Put,
//   Body,
//   Delete,
//   HttpCode,
//   HttpException,
//   HttpStatus
// } from '@nestjs/common'
// import { UserService } from './user.service'
// import { UserUpdateDto } from './user.dto'
// import { UserEntity } from './user.entity'
// import { CurrentUser } from 'src/decorators/user.decorator'

// @Controller('users')
// export class UserController {
//   constructor(private userService: UserService) {}

//   @Get()
//   profile(@CurrentUser() user: UserEntity): Pick<UserEntity, 'id' | 'email'> {
//     const { id, email } = user

//     return {
//       id,
//       email
//     }
//   }

//   @Put()
//   async update(
//     @CurrentUser('id') id: number,
//     @Body() body: UserUpdateDto
//   ): Promise<Pick<UserEntity, 'id' | 'email'>> {
//     const { email, password } = body
//     if (!email && !password) {
//       throw new HttpException(
//         'Missing fields: email, password',
//         HttpStatus.BAD_REQUEST
//       )
//     }

//     const user = await this.userService.update(id, body)
//     if (typeof user === 'string') {
//       throw new HttpException(user, HttpStatus.CONFLICT)
//     }

//     return user
//   }

//   @Delete()
//   @HttpCode(204)
//   delete(@CurrentUser('id') id: number): void {
//     this.userService.delete(id)
//   }
// }
