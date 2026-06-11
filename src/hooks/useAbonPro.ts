import { useQuery } from '@tanstack/react-query'

import { PlanAbonnementProprietaireService } from '@/services/planAbonnementProprietaire.service'
import type { PlanAbonnementProprietaireQuery } from '@/types/PlanAbonnementProprietaire.type'

export const useAbonPro = (query: PlanAbonnementProprietaireQuery) =>
  useQuery({
    queryKey: ['abon-pro', query.limit, query.page],
    queryFn: async () => {
      return PlanAbonnementProprietaireService.getPlanAbonnementProprietaire(query)
    }
  })

export const useOneAbonPro = (id: string) =>
  useQuery({
    queryKey: ['abon-pro', id],
    queryFn: async () => {
      return PlanAbonnementProprietaireService.getById(id)
    }
  })
