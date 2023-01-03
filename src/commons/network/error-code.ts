export enum StatusCode {
  UNKNOWN_ERR = 0,
  DONE = 200,
  SERVER_ERROR = 500,
  AUTH_ERROR = 401,
}

export enum ErrorCode {
  CONNECT_TIME_OUT = 'ECONNABORTED',
  ERR_NETWORK = 'ERR_NETWORK'
}
