import type { CreateFactureDto, FactureQuery, FactureResponse, FactureResponseGetAll } from '@/types/facture.type'
import instance from '../manager/axiosInstance'

export class FactureService {
  static url: string = '/facture'

  static async getAllInvoices(query: FactureQuery) {
    return await instance.get<FactureResponseGetAll>(`${this.url}`, {
      params: {
        ...query
      }
    })
  }

  static async getInvoiceById(id: string) {
    return await instance.get<FactureResponse>(`${this.url}/${id}`)
  }

  static async deleteInvoice(id: string) {
    return await instance.delete(`${this.url}/${id}`)
  }

  static async CreateInvoice(data: CreateFactureDto) {
    return await instance.post<FactureResponse>(`${this.url}`, data)
  }
}

// const url: string = '/facture'

// export const FactureServiceCont = {
//   async getAllInvoices(query: FactureQuery) {
//     return await instance.get<FactureResponseGetAll>(`${url}`, {
//       params: {
//         ...query
//       }
//     })
//   },

//   async getInvoiceById(id: string) {
//     return await instance.get<FactureResponse>(`${url}/${id}`)
//   },
//   async deleteInvoice(id: string) {
//     return await instance.delete(`${url}/${id}`)
//   },
//   async CreateInvoice(data: CreateFactureDto) {
//     return await instance.post<FactureResponse>(`${url}`, data)
//   }
// }
