import axios, { AxiosError, AxiosResponse } from 'axios'
import Debug from 'debug'
import { LoginModelDto } from '~/core/data/dto/login/login-model-dto'
import { LoginResponse } from '~/core/domain/entities/login/login-response'
import { Constant } from '../constant/constant'
import { Result } from '../network/result'
import { getToken } from './local-storage'

const debug = Debug('APISercices:')

export const apiService = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})
apiService.interceptors.request.use(
  (config) => {
    const { url, method } = config
    config.headers = { ...config.headers, Authorization: 'Bearer ' + getToken() }
    debug('axios request succeeded ---------------------------------')
    debug(`method: ${method ?? 'undefined'}, url: ${url ?? 'undefined'}`)
    debug(`headers: ${JSON.stringify(config.headers, null, 2)}`)
    debug(`params: ${JSON.stringify(config.params, null, 2)}`)
    debug(`data: ${JSON.stringify(config.data, null, 2)}`)
    return config
  },
  async (error: Error) => {
    debug('axios request failed')
    debug(`error: ${error.message}`)
    return await Promise.reject(error)
  }
)

apiService.interceptors.response.use(
  (response) => {
    debug('axios response succeeded')
    debug(`statusCode: ${response.status}`)
    debug(`responseData: ${JSON.stringify(response.data, null, 2)}`)
    return response
  },
  async (error: AxiosError) => {
    debug('axios response failed')
    debug(`error: ${JSON.stringify(error, null, 2)}`)
    debug(`error response: ${JSON.stringify((error.response != null) || {}, null, 2)}`)
    return await Promise.reject(error)
  }
)

/// //////////// Example

export async function callApiLogin (user: LoginModelDto): Promise<AxiosResponse<Result<LoginResponse>>> {
  const result: AxiosResponse<Result<LoginResponse>> = await apiService.post(Constant.URL, user)
  return result
}
