export type LoginResponse = {
  accessToken: string
  refreshToken: string
  user: LoginResponseUser
}

export type LoginResponseUser = {
  id: string
  email: string
  nom: string
  prenom: string
  tel: string
  sexe: string
  photo: string | null
  role: string
  createdAt: Date
}
