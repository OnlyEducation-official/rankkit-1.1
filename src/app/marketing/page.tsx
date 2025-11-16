import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MarketingForm from './_components/MarketingForm';

function page() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: '100dvh', display: 'flex', alignItems: 'center' }}>
        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              height: 1,
            }}
          >
            <Typography variant="h1">
              <Typography variant="inherit">Drive 3.5X Growth</Typography>
              <Typography variant="inherit">With 360 Marketing</Typography>
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: 0.75, marginBlockStart: 5 }}>
              Built for Growth. Backed by 10+ Years of Expertise. 100+ brands have scaled faster
              with our full-stack marketing solutions: spanning strategy, creative, media, social,
              SEO, content production, and more. We craft integrated campaigns that deliver stronger
              ROI, higher engagement, and lasting brand value.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              height: 1,
            }}
          >
            <Grid container>
              <Grid size={3} />
              <Grid size={9}>
                <MarketingForm />
              </Grid>
            </Grid>
            <Grid />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default page;
