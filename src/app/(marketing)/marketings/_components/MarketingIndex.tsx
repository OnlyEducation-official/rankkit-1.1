import React from 'react'
import CoreServices from './CoreServices'
import { Grid } from '@mui/material'
import BrandCta from './BrandCta'
import ProvenProcess from './ProvenProcess'

export default function MarketingIndex() {
  return (
    <Grid>
      <CoreServices />
      <BrandCta />
      <ProvenProcess />
    </Grid>
  )
}
