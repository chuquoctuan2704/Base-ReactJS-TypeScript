import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { debug } from '../common-utils'

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
// export type Notice = {
//     id: string
//     title: string
//     content: string
//     createdAt: string
//   }
  
// export type NoticeApiResult = {
//     result: boolean
//     data: {
//       notices: {
//         results: Notice[]
//         total: number
//       }
//     }
//   }
  
// export async function requestNotices(
//   token: string,
//   page: number,
//   language = 'ko',
// ): Promise<{ notices: Notice[]; total: number }> {
//   const urlPath = MOBILE_API_PATHS.GET_NOTICES
//   const url = `${mobileBaseUrl}${urlPath}`
  
//   const requestConfig: AxiosRequestConfig = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     params: {
//       page,
//       rpp: NOTICES_PER_PAGE,
//       language,
//     },
//   }
  
//   const result: AxiosResponse<NoticeApiResult> = await luniverseAxios.get(url, requestConfig)
  
//   return { notices: result.data.data.notices.results, total: result.data.data.notices.total }
// }


// export type PasswordChangeApiResponse = {
//     result: boolean
//   }
  
// export async function requestChangePasswordWithVault(
//   token: string,
//   oldPassword: string,
//   newPassword: string,
//   encryptedDidInfo: string,
// ): Promise<boolean> {
//   const decodedToken: { data: { accountId: string } } = jwtDecode(token)
//   const { accountId } = decodedToken.data
  
//   const urlPath = MOBILE_API_PATHS.CHANGE_PASSWORD_WITH_VAULT.replace(URL_PATH_TO_REPLACE.ACCOUNT_ID, accountId)
//   const url = `${mobileBaseUrl}${urlPath}`
  
//   const data = {
//     oldPassword,
//     newPassword,
//     encryptedDidInfo,
//   }
  
//   const requestConfig: AxiosRequestConfig = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
  
//   const result: AxiosResponse<PasswordChangeApiResponse> = await luniverseAxios.post(url, data, requestConfig)
  
//   return result.data.result
// }
  