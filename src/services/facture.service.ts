import type { paginationsalle, salleApiResponse, createFactureInput } from '@/types/common.type'
import type { factureQuery, facture } from '@/types/facture'
import instance from './manager/axiosInstance'

export class FactureService {
  static async getAllFactures(query: factureQuery) {
    return await instance.get<paginationsalle<facture>>(`/facture`, {
      params: query
    })
  }

  static async getFactureById(id: string) {
    return await instance.get<salleApiResponse<facture>>(`/facture/${id}`)
  }
  static async createFacture(data: createFactureInput) {
    return await instance.post<salleApiResponse<facture>>(`/facture`, data)
  }

  static async updateFacture(data: createFactureInput, id: string) {
    return await instance.patch<salleApiResponse<facture>>(`/facture/${id}`, data)
  }

  static async deleteFacture(id: string) {
    return await instance.delete(`/facture/${id}`)
  }
}
