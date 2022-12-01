const EXAMPLE = 'example'

export function setExample (example: string) {
  sessionStorage.setItem(EXAMPLE, example)
}

export function getExample (): string {
  return sessionStorage.getItem(EXAMPLE) ?? ''
}
