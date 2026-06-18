export type paiement = {
  id: string
  factureId: string
  statut: string
  methode: string
  num_transaction: string
  createdAt: string
  updatedAt: string
}

export type paiementQuery = {
  page: number,
  limit: number
}
