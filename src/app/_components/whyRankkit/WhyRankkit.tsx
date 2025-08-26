import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function WhyRankkit() {
  return (
    <Container maxWidth="lg" sx={{ paddingBlock: { xs: 6, md: 12 } }}>
      <Box>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column' }}>
            <LeftSection />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 6 } }}
          >
            <RightSection />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
