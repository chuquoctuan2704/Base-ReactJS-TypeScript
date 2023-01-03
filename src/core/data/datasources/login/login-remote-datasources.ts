import { AxiosResponse } from 'axios'
import { LoginResponse } from '../../../domain/entities/login/login-response'
import { Result } from '~/commons/network/result'
import { LoginModel } from '../../dto/login/login-model-dto'
import { callApiLogin } from '~/commons/services/api-services'

export class LoginRemoteDatasource {
  login = async (user: LoginModel): Promise<Result<LoginResponse>> => {
    const response: AxiosResponse<Result<LoginResponse>> = await callApiLogin(user)
    return response.data
  }
}
