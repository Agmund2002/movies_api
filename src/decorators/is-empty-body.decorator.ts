import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus
} from '@nestjs/common'

export const IsEmptyBody = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const { body } = ctx.switchToHttp().getRequest()

    const { length } = Object.keys(body)
    if (!length)
      throw new HttpException('Missing fields', HttpStatus.BAD_REQUEST)

    let bodyIsNotEmpty = false
    const dtoKeys = Object.keys(new data())
    dtoKeys.find(key => {
      if (body[key]) bodyIsNotEmpty = true
    })

    if (!bodyIsNotEmpty)
      throw new HttpException(
        `The body must have at least one of these fields: ${dtoKeys.join(', ')}`,
        HttpStatus.BAD_REQUEST
      )
  }
)
