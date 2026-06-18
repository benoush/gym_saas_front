'use client'

import { useMemo } from 'react'

import { Button, Grid, IconButton, Typography } from '@mui/material'

import type { ColumnDef } from '@tanstack/react-table'

import Chip from '@/@core/components/mui/Chip'
import MembresTableFilters from './MembresTableFilters'
import TableGeneric from '@/components/gerald-gym/TableGenerique'
import CustomAvatar from '@/@core/components/mui/Avatar'
import { useClientgetAll } from '@/hooks/useClientReq'
import { StatusColor, type client } from '@/types/client'
import { generateUrl } from '@/utils/utilsMethod'

// const dataPropriete: propriete[] = [
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'M',
//     statutabonnement: signalement.ACTIF,
//     date: '14 Apr 2021,8:43',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'M',
//     statutabonnement: signalement.ACTIF,
//     date: '14 Apr 2021,8:43',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'F',
//     statutabonnement: signalement.Inactif,
//     date: '-',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'M',
//     statutabonnement: signalement.ACTIF,
//     date: '14 Apr 2021,8:43',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'F',
//     statutabonnement: signalement.ACTIF,
//     date: '14 Apr 2021,8:43',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'M',
//     statutabonnement: signalement.ACTIF,
//     date: '14 Apr 2021,8:43',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'F',
//     statutabonnement: signalement.Inactif,
//     date: '-',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'M',
//     statutabonnement: signalement.Inactif,
//     date: '-',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'M',
//     statutabonnement: signalement.ACTIF,
//     date: '14 Apr 2021,8:43',
//     email: 'jordan@gmail.com'
//   },
//   {
//     case: <CustomAvatar src='/images/avatars/1.png' size={38} />,
//     infos: 'Jordan Stevenson',
//     telephone: '+228 95 25 63 54',
//     sexe: 'F',
//     statutabonnement: signalement.ACTIF,
//     date: '14 Apr 2021,8:43',
//     email: 'jordan@gmail.com'
//   }
// ]

const columns: ColumnDef<client>[] = [
  {
    header: 'INFOS',
    accessorKey: 'userId',
    cell: info => {
      const user = info.row.original?.users

      return (
        <div className='flex items-center gap-4'>
          <i className='tabler-square' style={{ fontSize: 20 }} />
          <CustomAvatar src={generateUrl(user.photo)} size={38} />
          <div className='flex flex-col'>
            <Typography color='textSecondary' className='font-medium'>
              {user.nom} {user.prenom}
            </Typography>
            <Typography variant='body2'>{user.email}</Typography>
          </div>
        </div>
      )
    }
  },
  {
    header: 'TELEPHONE',
    accessorKey: 'users.tel',
    cell: info => (
      <Typography variant='body2' className=''>
        {info.getValue<string>()}
      </Typography>
    )
  },
  {
    header: 'SEXE	',
    accessorKey: 'users.sexe',
    cell: info => (
      <Typography variant='body2' className=''>
        {info.getValue<string>()}
      </Typography>
    )
  },
  {
    header: 'statutabonnement',
    accessorKey: 'status',
    cell: ({ row }) => (
      <Chip size='small' variant='tonal' label={row.original.statut} color={StatusColor[row.original.statut]} />
    )
  },

  // {
  //   header: 'DATE EXPIRATION',
  //   accessorKey: 'date',
  //   cell: info => (
  //     <Typography variant='body2' className=''>
  //       {info.getValue<string>()}
  //     </Typography>
  //   )
  // },

  {
    header: 'Actions',
    id: 'actions',
    cell: () => (
      <div className='flex items-center gap-2'>
        <IconButton size='small' aria-label='edit'>
          <i className='tabler-trash' />
        </IconButton>
        <IconButton size='small' aria-label='view'>
          <i className='tabler-eye text-textSecondary' />
        </IconButton>
      </div>
    )
  }
]

const PageMembres = () => {
  // const [page, setPage] = useState<number>(0)
  // const [limit, setLimit] = useState<number>(10)

  const { data, isLoading, isError } = useClientgetAll({ page: 0, limit: 10 })

  const userlist: client[] = useMemo(() => data?.data.data.rows ?? [], [data])

  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <div className='mb-5 flex justify-end'>
          <Button variant='contained' startIcon={<i className='tabler-plus' />}>
            Ajouter un Membre
          </Button>
        </div>
        {isLoading ? (
          <Typography>En cours</Typography>
        ) : isError ? (
          <Typography>Echouer</Typography>
        ) : (
          data && (
            <TableGeneric
              columns={columns}
              data={userlist}
              titleConfig={{
                title: ''
              }}
              filtersComponent={<MembresTableFilters />}
            />
          )
        )}
      </Grid>
    </Grid>
  )
}

export default PageMembres
