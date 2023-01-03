
import { Result } from '~/commons/network/result'
import { LoginResponse, ValidateEmailResponse, ValidatePasswordResponse } from '../../../domain/entities/login/login-response'
import { LoginLocalDatasource } from '../../datasources/login/login-local-datasource'
import { LoginRemoteDatasource } from '../../datasources/login/login-remote-datasources'
import { LoginModel } from '../../dto/login/login-model-dto'

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
