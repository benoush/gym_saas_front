import type { User } from 'next-auth'
import * as v from 'valibot'

export type QueryParamsPagnination = {
  page?: number
  limit?: number
}

export type ApiResponsePagination<TableData> = {
  page: number
  limit: number
  data: {
    count: number
    rows: TableData[]
  }
}

export type Data<Row> = {
  count: number
  rows: Row[]
}

export type ApiResponse<TableData> = {
  success: boolean
  data: Data<TableData>
  message?: string
}

export type salleApiResponse<TableData> = {
  success: boolean
  data: Data<TableData>
}

export type paginationsalle<Row> = {
  rows: Row[]
  count: number
  page: number
  limit: number
}

// export type ApiResponseSimple = {
//   success: boolean
//   message: string
// }

export type userData = {
  accessToken: string
  refreshToken: string
  user: User
}

export const schemaUser = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(6), v.maxLength(100)),
  nom: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  prenom: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  tel: v.pipe(v.string(), v.minLength(10), v.maxLength(15)),
  sexe: v.pipe(v.string(), v.minLength(1), v.maxLength(10)),
  photo: v.string(),
  role: v.pipe(v.string(), v.minLength(2), v.maxLength(50))
})

export type createUserInput = v.InferInput<typeof schemaUser>

export const schemaLogin = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(6), v.maxLength(100))
})

export type loginInput = v.InferInput<typeof schemaLogin>

export const schemaRefreshToken = v.object({
  refreshToken: v.pipe(v.string(), v.minLength(10), v.maxLength(500))
})

export type refreshTokenInput = v.InferInput<typeof schemaRefreshToken>

export const schemaLogout = v.object({
  refreshToken: v.pipe(v.string(), v.minLength(10), v.maxLength(500))
})

export type logoutInput = v.InferInput<typeof schemaLogout>

export const schemaLogoutAll = v.object({
  userId: v.pipe(v.string(), v.minLength(2), v.maxLength(100))
})

export type logoutAllInput = v.InferInput<typeof schemaLogoutAll>

export const schemaForgotPassword = v.object({
  email: v.pipe(v.string(), v.email())
})

export type forgotPasswordInput = v.InferInput<typeof schemaForgotPassword>

export const schemaResetPassword = v.object({
  token: v.pipe(v.string(), v.minLength(10), v.maxLength(500)),
  newPassword: v.pipe(v.string(), v.minLength(6), v.maxLength(100))
})

export type resetPasswordInput = v.InferInput<typeof schemaResetPassword>

export const schemaChangePassword = v.object({
  userId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  currentPassword: v.pipe(v.string(), v.minLength(6), v.maxLength(100)),
  newPassword: v.pipe(v.string(), v.minLength(6), v.maxLength(100))
})

export type changePasswordInput = v.InferInput<typeof schemaChangePassword>

export const schemaMe = v.object({
  accessToken: v.pipe(v.string(), v.minLength(10), v.maxLength(500))
})

export type meInput = v.InferInput<typeof schemaMe>

export const schemaMeUpdate = v.object({
  email: v.pipe(v.string(), v.email()),
  nom: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  prenom: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  tel: v.pipe(v.string(), v.minLength(10), v.maxLength(15)),
  sexe: v.pipe(v.string(), v.minLength(1), v.maxLength(10)),
  photo: v.string()
})

export type meUpdateInput = v.InferInput<typeof schemaMeUpdate>

export const schemaCreateSalle = v.object({
  nom: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  contact: v.pipe(v.string(), v.email()),
  adresse: v.pipe(v.string(), v.minLength(10), v.maxLength(200)),
  horaire: v.pipe(v.string(), v.minLength(10), v.maxLength(100))
})

export type createSalleInput = v.InferInput<typeof schemaCreateSalle>

export const schemaCreatePlanAbonnementProprietaire = v.object({
  type: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  prix: v.pipe(v.string(), v.minLength(1), v.maxLength(20))
})

export type createPlanAbonnementProprietaireInput = v.InferInput<typeof schemaCreatePlanAbonnementProprietaire>

export const schemaCreatePlanAbonnementClient = v.object({
  type: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  prix: v.pipe(v.string(), v.minLength(1), v.maxLength(20))
})

export type createPlanAbonnementClientInput = v.InferInput<typeof schemaCreatePlanAbonnementClient>

export const schemaCreateAbonnementProprietaire = v.object({
  proprietaireId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  planId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  type: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  statut: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  montant: v.number()
})

export type createAbonnementProprietaireInput = v.InferInput<typeof schemaCreateAbonnementProprietaire>

export const schemaCreateAbonnementClient = v.object({
  clientId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  planId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  type: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  statut: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  montant: v.number()
})

export type createAbonnementClientInput = v.InferInput<typeof schemaCreateAbonnementClient>

export const schemaCreateProprietaire = v.object({
  userId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  recto_carte_identite: v.pipe(v.string(), v.minLength(2), v.maxLength(200)),
  verso_carte_identite: v.pipe(v.string(), v.minLength(2), v.maxLength(200)),
  doc_justificatif: v.pipe(v.string(), v.minLength(2), v.maxLength(200))
})

export type createProprietaireInput = v.InferInput<typeof schemaCreateProprietaire>

export const schemaCreateClient = v.object({
  userId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  statut: v.pipe(v.string(), v.minLength(2), v.maxLength(100))
})

export type createClientInput = v.InferInput<typeof schemaCreateClient>

export const schemaCreateStaff = v.object({
  userId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  salleId: v.pipe(v.string(), v.minLength(2), v.maxLength(100))
})

export type createStaffInput = v.InferInput<typeof schemaCreateStaff>

export const schemaCreateFacture = v.object({
  typeFacture: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  montant: v.pipe(v.string(), v.minLength(1), v.maxLength(20)),
  salleId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  clientId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  AbonnementClientId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  proprietaireId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  AbonnementProprietaireId: v.pipe(v.string(), v.minLength(2), v.maxLength(100))
})

export type createFactureInput = v.InferInput<typeof schemaCreateFacture>

export const schemaCreatePaiement = v.object({
  factureId: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  statut: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  methode: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
  num_transaction: v.pipe(v.string(), v.minLength(2), v.maxLength(100))
})

export type createPaiementInput = v.InferInput<typeof schemaCreatePaiement>
