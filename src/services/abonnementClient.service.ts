import type { abonnementClientQuery, AbonnementClient } from '@/types/abonnementClient'
import type { createAbonnementClientInput, paginationsalle, salleApiResponse } from '@/types/common.type'
import instance from './manager/axiosInstance'

export class AbonnementClientService {
  static async getAbonnementClient(AbonnementClientQuery: abonnementClientQuery) {
    return await instance.get<paginationsalle<AbonnementClient>>('/abonnementClient', {
      params: AbonnementClientQuery
    })
  }
  static async getById(id: string) {
    return await instance.get<salleApiResponse<AbonnementClient>>(`/abonnementClient/${id}`)
  }
  static async createAbonnementClient(data: createAbonnementClientInput) {
    return await instance.post<salleApiResponse<AbonnementClient>>(`/abonnementClient`, data)
  }

  static async updateAbonnementClient(data: createAbonnementClientInput, id: string) {
    return await instance.patch<salleApiResponse<AbonnementClient>>(`/abonnementClient/${id}`, data)
  }

  static async deleteAbonnementClient(id: string) {
    return await instance.delete(`/abonnementClient/${id}`)
  }
  
}
