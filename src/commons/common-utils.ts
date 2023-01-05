import { LanguageCode } from './constant/constant'
import { setLanguageCode, setToken } from './services/local-storage'

export function getErrorMessage (error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}

export function clearUser() {
  setToken('')
  setLanguageCode(LanguageCode.VI)
}
