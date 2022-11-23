import { getErrorMessage } from '../common-utils'
import { ErrorCode } from './error-code'

export class AppError extends Error {
  errorCode: ErrorCode

  constructor (error: unknown, errorCode: ErrorCode) {
    super(getErrorMessage(error))
    this.errorCode = errorCode
  }

  static from (error: unknown, _errorCode?: ErrorCode): AppError {
    let parsedError: AppError

    if (error instanceof AppError) {
      parsedError = error
    } else {
      const errorMessage = getErrorMessage(error)
      const errorCode = _errorCode === undefined ? ErrorCode.UNKNOWN_ERR : _errorCode
      parsedError = new AppError(errorMessage, errorCode)
    }

    return parsedError
  }
}
