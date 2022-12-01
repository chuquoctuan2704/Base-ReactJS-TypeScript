const TOKEN = 'token'
const LANGUAGE = 'language'

export function setToken (token: string) {
  localStorage.setItem(TOKEN, token)
}

export function getToken (): string {
  return localStorage.getItem(TOKEN) ?? ''
}

export function setLanguageCode (language: string) {
  localStorage.setItem(LANGUAGE, language)
}

export function getLanguageCode (): string {
  return localStorage.getItem(LANGUAGE) ?? ''
}
