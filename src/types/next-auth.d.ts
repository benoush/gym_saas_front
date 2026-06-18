import type { LoginResponseUser } from '@/types/auth.type'

declare module 'next-auth' {
  interface Session {
    user: LoginResponseUser
    token?: string
  }
}
