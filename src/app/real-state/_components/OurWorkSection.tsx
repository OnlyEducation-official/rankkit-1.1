import { Grid, Typography } from '@mui/material';
import React from 'react';
import OurWorkCard from './OurWorkCard';

export default function OurWorkSection() {
  return (
    <Grid
      container
      sx={{ minHeight: '100vh', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <Grid size={12} sx={{ padding: 1.5 }}>
        <Typography
          variant="h2"
          sx={{ width: 1, fontWeight: 500, minHeight: 'fit-content', textAlign: 'center' }}
        >
          Our Work
        </Typography>
      </Grid>
      <Grid container size={12} sx={{ padding: 1.5 }} spacing={2}>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <OurWorkCard />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <OurWorkCard />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <OurWorkCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
