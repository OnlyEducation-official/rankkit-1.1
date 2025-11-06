import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from './Card';

export default function CardSection() {
  return (
    <Grid
      container
      sx={{ minHeight: '100vh', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <Grid size={12} sx={{ padding: 1.5 }}>
        <Typography variant="h4" sx={{ width: 1, minHeight: 'fit-content', textAlign: 'center' }}>
          Featured Properties
        </Typography>
      </Grid>
      <Grid container size={12} sx={{ padding: 1.5 }} spacing={2}>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
        <Grid size={4} sx={{ height: 300, bgcolor: 'lightblue' }}>
          <Card />
        </Grid>
      </Grid>
    </Grid>
  );
}
