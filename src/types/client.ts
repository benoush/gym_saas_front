import type { ThemeColor } from '@/@core/types'
import type { user } from './auth'
import type { QueryParamsPagnination } from './common.type'

export enum ClientStatus {
  ACTIF = 'ACTIF',
  INACTIF = 'INACTIF',
  SUSPENDU = 'SUSPENDU'
}

export const StatusColor: Record<ClientStatus, ThemeColor> = {
  [ClientStatus.ACTIF]: 'success',
  [ClientStatus.INACTIF]: 'error',
  [ClientStatus.SUSPENDU]: 'warning'
}

export type client = {
  id: string
  userId: string
  statut: ClientStatus
  users: user
  createdAt: string
  updatedAt: string
}
export type clientQuery = QueryParamsPagnination & {
  statut?: ClientStatus
}
