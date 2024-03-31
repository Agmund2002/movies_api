import { IsString, MaxLength } from 'class-validator'

export class MovieDto {
  @IsString()
  @MaxLength(50)
  title: string

  @IsString()
  @MaxLength(50)
  director: string
}
