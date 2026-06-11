import * as v from 'valibot'

import type { QueryParamsPagnination } from './common.type'

export enum EnumTypeFacture {
  CLIENT = 'CLIENT',
  PROPRIETAIRE = 'PROPRIETAIRE'
}

export type FactureQuery = QueryParamsPagnination & {
  typeFacture: EnumTypeFacture
}

export const SchemaCreateFacture = v.object({
  typeFacture: v.enum(EnumTypeFacture, "Le type de facture doit être soit 'CLIENT' soit 'PROPRIETAIRE'"),
  montant: v.pipe(v.string('ce champ est requis'), v.regex(/^\d+(\.\d{1,2})?$/)),
  salleId: v.pipe(v.string('ce champ est requis'), v.uuid("L'ID de la salle doit être un UUID valide")),
  clientId: v.pipe(v.string('ce champ est requis'), v.uuid("L'ID du client doit être un UUID valide")),
  AbonnementClientId: v.pipe(v.string('ce champ est requis'), v.uuid("L'ID de l'abonnement doit être un UUID valide"))
})

export type CreateFactureDto = v.InferInput<typeof SchemaCreateFacture>

export type FactureResponse = {
  success: boolean
  data: DataCreateFacture
}

export type DataCreateFacture = {
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

// Get All Response

export interface FactureResponseGetAll {
  success: boolean
  data: FactureResponseTABLE
}

export interface FactureResponseTABLE {
  rows: Row[]
  count: number
  page: number
  limit: number
}

export interface Row {
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
