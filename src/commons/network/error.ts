import { AxiosError } from 'axios'
import { ErrorCode, StatusCode } from './error-code'
import { ResultError } from './result'

export class ServerError extends Error {
  errorCode?: number

  constructor (errorMessage: string, errorCode?: number) {
    super('mes_response.' + errorMessage)
    this.errorCode = errorCode
  }

  static from (error: unknown): ServerError {
    const err = error as AxiosError
    switch (err.response?.status) {
      case StatusCode.SERVER_ERROR: return new ServerError((err.response?.data as ResultError).msg, err.response?.status)
      case StatusCode.AUTH_ERROR: return new ServerError((err.response?.data as ResultError).msg, err.response?.status)
      default: {
        if (err.code === ErrorCode.CONNECT_TIME_OUT) {
          return new ServerError('Lag qua')
        } else if (err.code === ErrorCode.ERR_NETWORK) {
          return new ServerError('Mat mang roi')
        } else {
          return new ServerError(err.message)
        }
      }
    }
  }
}
