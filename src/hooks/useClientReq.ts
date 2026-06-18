import { useQuery } from '@tanstack/react-query'

import type { clientQuery } from '@/types/client'
import { ClientService } from '@/services/client.service'

export const useClientgetAll = (query?: clientQuery) =>
  useQuery({
    queryKey: ['client-all', query?.limit, query?.page, query?.statut],
    queryFn: async () => ClientService.getAllClient(query)
  })
