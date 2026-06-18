import type { user } from './auth'
import type { QueryParamsPagnination } from './common.type'

export type client = {
  id: string
  userId: string
  statut: string
  users: user
  createdAt: string
  updatedAt: string
}
export type clientQuery = QueryParamsPagnination & {
  statut: 'ACTIF' | 'INACTIF' | 'SUSPENDU'
}
