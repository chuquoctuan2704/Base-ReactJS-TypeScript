export class Result<T> {
  data: T | null

  code: number

  msg: string

  constructor (result: T | null, code: number, msg: string) {
    this.data = result
    this.code = code
    this.msg = msg
  }
}

export type ResultError = {
  data: unknown
  code: number
  msg: string
}
