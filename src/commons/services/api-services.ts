import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { LoginModel } from '../../features/login/data/dto/login-model'
import { LoginResponse } from '../../features/login/domain/entities/login-response'
import { debug } from '../common-utils'
import { Constant } from '../constant/constant'
import { Result } from '../network/result'

export const requestHeaders = {
  'Content-Type': 'application/json',
  'Authorization': ''
}

export const apiService = axios.create({
  headers: requestHeaders,
  timeout: 30000,
})

apiService.interceptors.request.use(
  (config) => {
    const { url, method } = config
    debug('axios request succeeded')
    debug(`method: ${method || 'undefined'}, url: ${url || 'undefined'}`)
    debug(`headers: ${JSON.stringify(config.headers, null, 2)}`)
    debug(`params: ${JSON.stringify(config.params, null, 2)}`)
    debug(`data: ${JSON.stringify(config.data, null, 2)}`)
    return config
  },
  (error: Error) => {
    debug('axios request failed')
    debug(`error: ${error.message}`)
    return Promise.reject(error)
  },
)
  
apiService.interceptors.response.use(
  (response) => {
    debug('axios response succeeded')
    debug(`statusCode: ${response.status}`)
    debug(`responseData: ${JSON.stringify(response.data, null, 2)}`)
    return response
  },
  (error: AxiosError) => {
    debug('axios response failed')
    debug(`error: ${JSON.stringify(error, null, 2)}`)
    debug(`error response: ${JSON.stringify(error.response || {}, null, 2)}`)
    return Promise.reject(error)
  },
)

/////////////// Example
  
export async function callApiLogin(user: LoginModel): Promise<AxiosResponse<Result<LoginResponse>>> {
  const url = Constant.URL + '/linkToAPI'
  const requestConfig: AxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer',
    }
  }
  const result: AxiosResponse<Result<LoginResponse>> = await apiService.post(url, user, requestConfig)
  return result
}
