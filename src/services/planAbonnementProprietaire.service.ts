
import { ApiResponse, ApiResponsePagination } from '@/types/common.type';
import {PlanAbonnementProprietaire, PlanAbonnementProprietaireQuery} from '../types/PlanAbonnementProprietaire.type'
import instance from './manager/axiosInstance'

export class PlanAbonnementProprietaireService {

    static async getPlanAbonnementProprietaire(planAbonnementProprietaireQuery: PlanAbonnementProprietaireQuery) {
        const {data} = await instance.get<ApiResponsePagination<PlanAbonnementProprietaire>>('/planAbonnementProprietaire', {
            params: planAbonnementProprietaireQuery
        })
        return data;

    }

    static async getById(id: string) {
        const {data} = await instance.get<ApiResponse<PlanAbonnementProprietaire>>(`/planAbonnementProprietaire/${id}`)
        return data;
    }

    static async updateType(id: string, type: string) {
        const {data} = await instance.patch<ApiResponse<PlanAbonnementProprietaire>>(`/planAbonnementProprietaire/type/${id}`, {
            type : type
        })
        return data;
    }

    static async updatePlan(id: string, prix: string, type: string) {
        const {data} = await instance.put<ApiResponse<PlanAbonnementProprietaire>>(`/planAbonnementProprietaire/${id}`, {
            prix : prix,
            type : type
            
        })
        return data;
    }

    static async deletePlan(id: string) {
        const {data} = await instance.delete<ApiResponse<PlanAbonnementProprietaire>>(`/planAbonnementProprietaire/${id}`)
        return data;
    }
}
