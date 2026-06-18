import type { paginationsalle, salleApiResponse, createStaffInput } from '@/types/common.type'
import type { staffQuery, staff } from '@/types/staff'
import instance from './manager/axiosInstance'

export class StaffService {
  static async getAllStaffs(query: staffQuery) {
    return await instance.get<paginationsalle<staff>>(`/staff`, {
      params: query
    })
  }

  static async getStaffById(id: string) {
    return await instance.get<salleApiResponse<staff>>(`/staff/${id}`)
  }
  static async createStaff(data: createStaffInput) {
    return await instance.post<salleApiResponse<staff>>(`/staff`, data)
  }

  static async updateStaff(data: createStaffInput, id: string) {
    return await instance.patch<salleApiResponse<staff>>(`/staff/${id}`, data)
  }

  static async deleteStaff(id: string) {
    return await instance.delete(`/staff/${id}`)
  }
  static async getByEmail(email: string) {
    return await instance.get<salleApiResponse<staff>>(`/staff/email/${email}`)
  }
}
