
import type { abonnementProprietaireQuery, AbonnementProprietaire } from '@/types/abonnementProprietaire'
import type { createAbonnementProprietaireInput, paginationsalle, salleApiResponse  } from '@/types/common.type'
import instance from './manager/axiosInstance'

export class AbonnementPropietaireService {
  static async getAbonnementProprietaire(AbonnementProprietaireQuery: abonnementProprietaireQuery) {
    return await instance.get<paginationsalle<AbonnementProprietaire>>('/abonnementProprietaire', {
      params: AbonnementProprietaireQuery
    })
  }
  static async getById(id: string) {
    return await instance.get<salleApiResponse<AbonnementProprietaire>>(`/abonnementProprietaire/${id}`)
  }
  static async createAbonnementProprietaire(data: createAbonnementProprietaireInput) {
    return await instance.post<salleApiResponse<AbonnementProprietaire>>(`/abonnementProprietaire`, data)
  }

  static async updateAbonnementProprietaire(data: createAbonnementProprietaireInput, id: string) {
    return await instance.patch<salleApiResponse<AbonnementProprietaire>>(`/abonnementProprietaire/${id}`, data)
  }
  
  static async deleteAbonnementProprietaire(id: string) {
    return await instance.delete(`/abonnementProprietaire/${id}`)
  }
 

}
