export interface UserProfile {
  _id: string
  email: string
  displayName: string
  accessToken: string
  status?: number
  role: number
  password?: string
  otp?: string
}