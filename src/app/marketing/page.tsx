import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

function page() {
  return (
    <Container>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100dvh' }}>
          <Typography variant="h2">
            <Typography variant="inherit">Drive 3.5X Growth</Typography>
            <Typography variant="inherit">With 360 Marketing</Typography>
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: 0.75 }}>
            Built for Growth. Backed by 10+ Years of Expertise. 100+ brands have scaled faster with
            our full-stack marketing solutions: spanning strategy, creative, media, social, SEO,
            content production, and more. We craft integrated campaigns that deliver stronger ROI,
            higher engagement, and lasting brand value.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} />
      </Grid>
    </Container>
  );
}

export default page;
