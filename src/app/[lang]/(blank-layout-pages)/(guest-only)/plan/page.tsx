'use client'

import CustomTextField from '@/@core/components/mui/TextField'
import Checkout from '@/views/front-pages/CheckoutPage'
import Pricing from '@/views/front-pages/landing-page/Pricing'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  TextField
} from '@mui/material'


const salles = [
  { name: 'Salle 1' },
  { name: 'Salle 2' },
  { name: 'Salle 3' },
  { name: 'Salle 4' }
]

const FormsAbonnement = () => {
  return (
    <div>
      <Pricing />
      <Checkout />
    </div>
  )
}

export default FormsAbonnement
