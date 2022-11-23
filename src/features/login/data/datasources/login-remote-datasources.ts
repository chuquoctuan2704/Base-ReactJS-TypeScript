import { AxiosResponse } from 'axios'
import { LoginResponse } from '../../domain/entities/login-response'
import { Result } from '../../../../commons/network/result'
import { LoginModel } from '../dto/login-model'
import { callApiLogin } from '../../../../commons/services/api-services'

export class LoginRemoteDatasource {
  login = async (user: LoginModel): Promise<Result<LoginResponse>> => {
    const response: AxiosResponse<Result<LoginResponse>> = await callApiLogin(user)
    return response.data
  }
}
