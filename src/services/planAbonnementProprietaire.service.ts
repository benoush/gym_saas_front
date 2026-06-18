import type { ApiResponse, ApiResponsePagination, createPlanAbonnementProprietaireInput } from '@/types/common.type'
import type {
  PlanAbonnementProprietaireQuery,
  PlanAbonnementProprietaire
} from '../types/PlanAbonnementProprietaire.type'
import instance from './manager/axiosInstance'

export class PlanAbonnementProprietaireService {
  static async getPlanAbonnementProprietaire(planAbonnementProprietaireQuery: PlanAbonnementProprietaireQuery) {
    const { data } = await instance.get<ApiResponsePagination<PlanAbonnementProprietaire>>(
      '/planAbonnementProprietaire',
      {
        params: planAbonnementProprietaireQuery
      }
    )

    return data
  }

  static async getById(id: string) {
    const { data } = await instance.get<ApiResponse<PlanAbonnementProprietaire>>(`/planAbonnementProprietaire/${id}`)

    return data
  }

  static async updateType(id: string, type: string) {
    return await instance.patch<ApiResponse<PlanAbonnementProprietaire>>(
      `/planAbonnementProprietaire/type/${id}`, { type })
  }

  static async updatePlan(id: string, data: createPlanAbonnementProprietaireInput) {
    return await instance.patch<ApiResponse<PlanAbonnementProprietaire>>(
      `/planAbonnementProprietaire/${id}`, data)
  }

  static async deletePlan(id: string) {
    const { data } = await instance.delete(`/planAbonnementProprietaire/${id}`)

    return data
  }

    
  static async createPlan(type: string, data: createPlanAbonnementProprietaireInput) {
    return await instance.post(`/planAbonnementProprietaire`, data)

  }
}
