
import { ApiResponse, ApiResponsePagination } from '@/types/common.type';
import instance from './manager/axiosInstance'
import { PlanAbonnementClient, PlanAbonnementClientQuery } from '@/types/planAbonnementClient.type';

export class PlanAbonnementClientService {

    static async getPlanAbonnement(planAbonnementClientQuery: PlanAbonnementClientQuery) {
        const {data} = await instance.get<ApiResponsePagination<PlanAbonnementClient>>('/planAbonnementClient', {
            params: planAbonnementClientQuery
        })
        return data;

    }

    static async getById(id: string) {
        const {data} = await instance.get<ApiResponse<PlanAbonnementClient>>(`/planAbonnementClient/${id}`)
        return data;
    }

    static async updateType(id: string, type: string) {
        const {data} = await instance.patch<ApiResponse<PlanAbonnementClient>>(`/planAbonnementClient/type/${id}`, {
            type : type
        })
        return data;
    }

    static async updatePlan(id: string, prix: string, type: string) {
        const {data} = await instance.put<ApiResponse<PlanAbonnementClient>>(`/planAbonnementClient/${id}`, {
            prix : prix,
            type : type
            
        })
        return data;
    }

    static async deletePlan(id: string) {
        const {data} = await instance.delete<ApiResponse<PlanAbonnementClient>>(`/planAbonnementClient/${id}`)
        return data;
    }
}
