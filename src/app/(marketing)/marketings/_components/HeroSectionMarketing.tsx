import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MarketingForm from '../../_components/MarketingForm';

export default function HeroSectionMarketing() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={6}
          sx={{
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" fontWeight={600}>
            Boost Brand Visibility by 70% With Precision Targeting
          </Typography>
          <Typography variant="subtitle1">
            Reach the right audience at the right time using data-driven targeting methods that
            maximise exposure, reduce wasted spend, and ensure your brand stays front and center
            across digital platforms.
          </Typography>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', justifyContent: 'end' }}>
          <MarketingForm />
        </Grid>
      </Grid>
    </Container>
  );
}
