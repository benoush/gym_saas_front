import type { LoginFormData } from '@/validations/auth.validation'
import type { LoginResponse } from '@/types/auth.type'
import instance from '../manager/axiosInstance'
import type { ApiResponse } from '@/types/common.type'

export class AuthService {
  static login = async (data: LoginFormData) => {
    return await instance.post<ApiResponse<LoginResponse>>('/auth/login', data)
  }
}
