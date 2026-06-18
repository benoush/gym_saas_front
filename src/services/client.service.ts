import type { clientQuery, client } from '@/types/client'
import type { ApiResponsePagination, createClientInput, Data, salleApiResponse } from '@/types/common.type'
import instance from './manager/axiosInstance'

export class ClientService {
  static async getAllClient(query: clientQuery) {
    return await instance.get<ApiResponsePagination<Data<client>>>(`/client`, {
      params: query
    })
  }

  static async getClientById(id: string) {
    return await instance.get<salleApiResponse<client>>(`/client/${id}`)
  }
  static async createClient(data: createClientInput) {
    return await instance.post<salleApiResponse<client>>(`/client`, data)
  }

  static async updateClient(data: createClientInput, id: string) {
    return await instance.patch<salleApiResponse<client>>(`/client/${id}`, data)
  }

  static async deleteClient(id: string) {
    return await instance.delete(`/client/${id}`)
  }
  static async getByEmail(email: string) {
    return await instance.get<salleApiResponse<client>>(`/client/email/${email}`)
  }
}
