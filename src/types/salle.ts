export type salle = {
  id: string
  proprietaireId: string
  nom: string
  contact: string
  adresse: string
  horaire: string
  createdAt: string
  updatedAt: string
}

export type salleQuery = {
  page: number,
  limit: number
}
