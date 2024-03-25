export class MovieCreateDto {
  title: string
  director: string
}

export class MovieUpdateDto {
  title?: string
  director?: string
}

export class MovieDto {
  id: number
  title: string
  director: string
}
