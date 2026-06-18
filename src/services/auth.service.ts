import type { user } from '@/types/auth'
import type { ApiResponse, createUserInput, loginInput, meInput, meUpdateInput, refreshTokenInput } from '@/types/common.type'
import instance from './manager/axiosInstance'

export class AuthService {
  static async register(data: createUserInput) {
    return await instance.post<ApiResponse<user>>(`/auth/register`, data)
  }
  static async login(data: loginInput) {
    return await instance.post<ApiResponse<user>>(`/auth/login`, data)
  }
  static async refreshToken(data: refreshTokenInput) {
    return await instance.post<ApiResponse<user>>(`/auth/refresh-token`, data)
  }
  static async logout() {
    return await instance.post<ApiResponse<user>>(`/auth/logout`)
  }
  static async logoutAll() {
    return await instance.post<ApiResponse<user>>(`/auth/logout-all`)
  }
  static async forgotPassword() {
    return await instance.post<ApiResponse<user>>(`/auth/forgot-password`)
  }
  static async resetPassword() {
    return await instance.post<ApiResponse<user>>(`/auth/reset-password`)
  }
  static async changePassword() {
    return await instance.post<ApiResponse<user>>(`/auth/change-password`)
  }
  static async getProfile(data: meInput) {
    return await instance.get<ApiResponse<user>>(`/auth/me`, {
      params: data
    })
  }
  static async updateProfile(data: meUpdateInput) {
    return await instance.patch<ApiResponse<user>>(`/auth/me`, data)
  }
}
