export type AbonnementProprietaire = {
  id: string
  proprietaireId: string
  planId: string
  type: string
  statut: string
  montant: number
  createdAt: string
  updatedAt: string
  finAt: string
  deleteAt: string
}

export type abonnementProprietaireQuery = {
  page: number,
  limit: number
}
