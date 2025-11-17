// import { MarketingServices } from '@/components/marketing/Services';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MarketingServices from '@/components/marketing/Services';
import MarketingForm from '../_components/MarketingForm';
import { Link } from 'react-scroll';

function page() {
  return (
    <Box

    >
      <Box id="banner" sx={{ height: '100dvh', display: 'flex', alignItems: 'center', background: "radial-gradient(circle,rgba(238, 174, 202, 1) 45%, rgba(148, 187, 233, 1) 100%)" }}>
        <Container
          maxWidth="xl"
        >
          <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                height: 1,
              }}
            >
              <Typography variant="h1">
                <Typography variant="inherit" sx={{ fontWeight: 500 }}>Drive 3.5X Growth</Typography>
                <Typography variant="inherit" sx={{ fontWeight: 500 }}>With 360 Marketing</Typography>
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
        </Container>

      </Box>
      <Box sx={{background: "linear-gradient(77deg,rgba(180, 207, 224, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(237, 237, 237, 1) 98%)", paddingTop:"100px"}}>
        <Container maxWidth={'xl'}>
          <MarketingServices />
        </Container>
      </Box>
    </Box>
  );
}

export default page;
