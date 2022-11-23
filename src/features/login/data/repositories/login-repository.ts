import { Result } from '../../../../commons/network/result'
import { LoginResponse, ValidateEmailResponse, ValidatePasswordResponse } from '../../domain/entities/login-response'
import { LoginLocalDatasource } from '../datasources/login-local-datasource'
import { LoginRemoteDatasource } from '../datasources/login-remote-datasources'
import { LoginModel } from '../dto/login-model'

export interface LoginRepository {
  login: (user: LoginModel) => Promise<Result<LoginResponse> | null>
  checkValidateEmail: (email: string) => Promise<ValidateEmailResponse>
  checkValidatePassword: (password: string) => Promise<ValidatePasswordResponse>
}

export class LoginRepositoryImpl implements LoginRepository {
  constructor (
    private readonly loginRemoteDatasource: LoginRemoteDatasource,
    private readonly loginLocalDatasource: LoginLocalDatasource
  ) {}

  async login (user: LoginModel): Promise<Result<LoginResponse> | null> {
    return await Promise.resolve(await this.loginRemoteDatasource.login(user))
  }

  async checkValidateEmail (email: string): Promise<ValidateEmailResponse> {
    return await Promise.resolve(this.loginLocalDatasource.checkValidateEmail(email))
  }

  async checkValidatePassword (password: string): Promise<ValidatePasswordResponse> {
    return await Promise.resolve(this.loginLocalDatasource.checkValidatePassword(password))
  }
}
