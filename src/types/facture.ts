export type facture = {
  id: string
  typeFacture: string
  montant: string
  salleId: string
  clientId: string
  AbonnementClientId: string
  proprietaireId: string
  AbonnementProprietaireId: string
  createdAt: string
  updatedAt: string
}
export type factureQuery = {
  page: number,
  limit: number
}
