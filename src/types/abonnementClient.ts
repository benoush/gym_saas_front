export type AbonnementClient = {
  id: string
  clientId: string
  planId: string
  type: string
  statut: string
  montant: number
  createdAt: string
  updatedAt: string
  finAt: string
  deleteAt: string
}

export type abonnementClientQuery = {
  page: number,
  limit: number
}
