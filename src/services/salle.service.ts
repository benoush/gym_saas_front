import type { createSalleInput, paginationsalle, salleApiResponse } from '@/types/common.type'
import type { salle, salleQuery } from '@/types/salle'
import instance from './manager/axiosInstance'

export class SalleService {
  static async getSalle(SalleQuery: salleQuery) {
    const { data } = await instance.get<paginationsalle<salle>>('/salle', {
      params: SalleQuery
    })

    return data
  }
  static async getById(id: string) {
    const { data } = await instance.get<salleApiResponse<salle>>(`/salle/${id}`)

    return data
  }
  static async createSalle(data: createSalleInput) {
    return await instance.post<salleApiResponse<salle>>(`/salle`, data)
  }

  static async updateSalle(data: createSalleInput, id: string) {
    return await instance.patch<salleApiResponse<salle>>(`/salle/${id}`, data)
  }
  
  static async deleteSalle(id: string) {
    const { data } = await instance.delete(`/salle/${id}`)

    return data
  }
}
