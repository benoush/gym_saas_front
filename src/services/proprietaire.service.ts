import type { createProprietaireInput, paginationsalle } from '@/types/common.type'
import type { proprietaire, proprietaireQuery } from '@/types/proprietaire'
import  instance  from './manager/axiosInstance'

export class ProprietaireService {
  static async getProprietaires(query: proprietaireQuery) {
    return await instance.get<paginationsalle<proprietaire>>('/proprietaire', {
      params: query
    })
  }
  static async getById(id: string) {
    return await instance.get(`/proprietaire/${id}`)
  }
  static async createProprietaire(data: createProprietaireInput) {
    return await instance.post(`/proprietaire`, data)
  }

  static async updateProprietaire(data: createProprietaireInput, id: string) {
    return await instance.patch(`/proprietaire/${id}`, data)
  }
  static async deleteProprietaire(id: string) {
    return await instance.delete(`/proprietaire/${id}`)
  }
  static async getByEmail(email: string) {
    return await instance.get(`/proprietaire/email/${email}`)
  }
}
