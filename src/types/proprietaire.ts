export type proprietaire = {
  id: string
  userId: string
  recto_carte_identite: string
  verso_carte_identite: string
  doc_justificatif: string
  createdAt: string
  updatedAt: string
}

export type proprietaireQuery = {
  page: number,
  limit: number
}
