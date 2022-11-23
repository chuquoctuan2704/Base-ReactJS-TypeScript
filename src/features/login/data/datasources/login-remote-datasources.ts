import { LoginResponse } from '../../domain/entities/login-response'
import { Result } from '../../../../commons/network/result'
import { LoginModel } from '../dto/login-model'
import { apiService } from '../../../../commons/services/api-services'
import { AxiosResponse } from 'axios'

export class LoginRemoteDatasource {
  login = async (user: LoginModel): Promise<Result<LoginResponse>> => {
    const response: AxiosResponse<Result<LoginResponse>> = await apiService.login(user)
    return response.data
  }
}
