import type { ApiResponse, ApiResponsePagination, createPlanAbonnementClientInput } from '@/types/common.type'
import instance from './manager/axiosInstance'
import type { PlanAbonnementClient, PlanAbonnementClientQuery } from '@/types/planAbonnementClient.type'

export class PlanAbonnementClientService {
  static async getPlanAbonnement(planAbonnementClientQuery: PlanAbonnementClientQuery) {
    const { data } = await instance.get<ApiResponsePagination<PlanAbonnementClient>>('/planAbonnementClient', {
      params: planAbonnementClientQuery
    })

    return data
  }

  static async getById(id: string) {
    const { data } = await instance.get<ApiResponse<PlanAbonnementClient>>(`/planAbonnementClient/${id}`)

    return data
  }

  static async updateType(id: string, type: string) {
    const { data } = await instance.patch<ApiResponse<PlanAbonnementClient>>(`/planAbonnementClient/type/${id}`, {
      type: type
    })

    return data
  }

  static async updatePlan(id: string, data: createPlanAbonnementClientInput) {
    return await instance.patch<ApiResponse<PlanAbonnementClient>>(`/planAbonnementClient/${id}`, data)

   
  }

  static async deletePlan(id: string) {
    const { data } = await instance.delete(`/planAbonnementClient/${id}`)

    return data
  }
}
