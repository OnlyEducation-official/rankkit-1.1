import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import GridLeftColumn from './GridLeftColumn';
import GridRightColumn from './GridRightColumn';

export default function GridSections() {
  return (
    <Grid container>
      <Box sx={{ marginBlockEnd: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 600, color: 'error.main' }}>
          Built on{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Modern Technologies
          </Box>
        </Typography>
        <Typography variant="body1">
          {`We don’t just use tools — we engineer with purpose. Our technology stack is carefully
        selected to ensure speed, scalability, and seamless user experiences across web platforms,
        applications, and digital ecosystems.`}
        </Typography>
      </Box>
      <Grid size={{ xs: 12, sm: 5, md: 4 }} sx={{ borderRadius: 3 }}>
        <GridLeftColumn />
      </Grid>
      <Grid size={{ xs: 12, sm: 7, md: 8 }}>
        <GridRightColumn />
      </Grid>
    </Grid>
  );
}
