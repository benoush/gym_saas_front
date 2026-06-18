import { Grid } from '@mui/material'

import PageMembres from '@/views/gerald-gym-pages/Membres/PageMembres'

const TableauDeBord = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <PageMembres />
      </Grid>
    </Grid>
  )
}

export default TableauDeBord
