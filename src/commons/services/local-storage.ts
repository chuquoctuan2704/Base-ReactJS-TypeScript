const TOKEN = 'token'
const LANGUAGE = 'language'

export async function setToken(token: string) {
  localStorage.setItem(TOKEN, token)
}

export async function getToken(): Promise<string> {
  return localStorage.getItem(TOKEN) ?? ''
}