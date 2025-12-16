import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import GridLeftColumn from './GridLeftColumn';
import GridRightColumn from './GridRightColumn';

export default function GridSections() {
  return (
    <Grid container sx={{ border: '1px solid black' }}>
      <Grid size={{ xs: 12, sm: 5, md: 4 }}>
        <GridLeftColumn />
      </Grid>
      <Grid size={{ xs: 12, sm: 7, md: 8 }}>
        <GridRightColumn />
      </Grid>
    </Grid>
  );
}
