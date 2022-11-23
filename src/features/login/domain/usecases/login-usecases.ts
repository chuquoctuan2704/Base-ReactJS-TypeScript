import { AppError } from '../../../../commons/network/error'
import { Result } from '../../../../commons/network/result'
import { LoginModel } from '../../data/dto/login-model'
import { LoginRepository } from '../../data/repositories/login-repository'
import { LoginResponse, ValidateEmailResponse, ValidatePasswordResponse } from '../entities/login-response'

export class LoginUsecase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async login (user: LoginModel): Promise<Result<LoginResponse>> {
    let result!: Result<LoginResponse>
    try {
      const res = await this.loginRepository.login(user)
      if (res != null) {
        result = res
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return result
  }

  async checkValidateEmail (email: string): Promise<ValidateEmailResponse> {
    let result!: Promise<ValidateEmailResponse>
    try {
      const res = this.loginRepository.checkValidateEmail(email)
      if (res) {
        result = res
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return await result
  }

  async checkValidatePassword (password: string): Promise<ValidatePasswordResponse> {
    let result!: Promise<ValidatePasswordResponse>
    try {
      const res = this.loginRepository.checkValidatePassword(password)
      if (res) {
        result = res
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return await result
  }
}
