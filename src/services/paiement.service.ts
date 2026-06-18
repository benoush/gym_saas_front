import type { paginationsalle, salleApiResponse, createPaiementInput } from '@/types/common.type'
import type { paiementQuery, paiement } from '@/types/paiement'
import instance from './manager/axiosInstance'

export class PaiementService {
  static async getAllPaiements(query: paiementQuery) {
    return await instance.get<paginationsalle<paiement>>(`/paiement`, {
      params: query
    })
  }
  static async getPaiementById(id: string) {
    return await instance.get<salleApiResponse<paiement>>(`/paiement/${id}`)
  }
  static async createPaiement(data: createPaiementInput) {
    return await instance.post<salleApiResponse<paiement>>(`/paiement`, data)
  }

  static async updatePaiement(data: createPaiementInput, id: string) {
    return await instance.patch<salleApiResponse<paiement>>(`/paiement/${id}`, data)
  }

  static async updatePaiementStatus(statut: string, id: string) {
    return await instance.patch<salleApiResponse<paiement>>(`/paiement/${id}/status`, { statut })
  }

  static async updatePaiementMode(mode: string, id: string) {
    return await instance.patch<salleApiResponse<paiement>>(`/paiement/${id}/mode`, { mode })
  }

  static async deletePaiement(id: string) {
    return await instance.delete(`/paiement/${id}`)
  }
}
