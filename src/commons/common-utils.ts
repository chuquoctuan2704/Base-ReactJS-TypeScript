export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  } else {
    return String(error)
  }
}
export function debug(...data: any[]): void{
  console.log(data)
}
