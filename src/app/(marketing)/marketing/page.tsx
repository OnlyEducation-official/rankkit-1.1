// import { MarketingServices } from '@/components/marketing/Services';

'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MarketingServices from '@/components/marketing/Services';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from '@/assets/images/logo2.png';
import MarketingForm from '../_components/MarketingForm';

function page() {
  return (
    <Box>
      <Box
        id="banner"
        sx={{
          height: { md: '100dvh' },
          display: 'flex',
          alignItems: 'center',
          background:
            'radial-gradient(circle,rgba(238, 174, 202, 1) 45%, rgba(148, 187, 233, 1) 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingInline: { md: 4, lg: 8 },
              position: 'relative',
            }}
            spacing={{ xs: 7, md: 0 }}
          >
            {/* Header img */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '25px', sm: '35px', md: '-40px', xl: '-40px' },
                left: { sm: '10px', md: '32px', lg: '64px' },
              }}
            >
              <Box sx={{ position: 'relative', width: '135px', aspectRatio: 4.2 / 1 }}>
                <Image src={logo} fill alt="RankKit Logo" style={{ objectFit: 'contain' }} />
              </Box>
            </Box>
            {/*  */}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                height: { md: 1 },
                order: { xs: 2, md: 0 },
                paddingBlockEnd: { xs: 10, md: 0 },
              }}
            >
              <Typography variant="h1" sx={{ typography: { xs: 'h4', md: 'h1' } }}>
                <Typography variant="inherit" sx={{ fontWeight: 500 }}>
                  Drive 3.5X Growth
                </Typography>
                <Typography variant="inherit" sx={{ fontWeight: 500 }}>
                  With 360 Marketing
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ maxWidth: { md: 1, lg: 0.85, xl: 0.75 }, marginBlockStart: 5 }}
              >
                Built for Growth. Backed by 10+ Years of Expertise. 100+ brands have scaled faster
                with our full-stack marketing solutions: spanning strategy, creative, media, social,
                SEO, content production, and more. We craft integrated campaigns that deliver
                stronger ROI, higher engagement, and lasting brand value.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                height: { xs: '100dvh', md: 1 },
                display: { xs: 'flex', md: 'block' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid container>
                <Grid size={{ xs: 0, md: 2, lg: 3 }} />
                <Grid size={{ xs: 12, md: 10, lg: 9 }}>
                  <MarketingForm />
                </Grid>
              </Grid>
              <Grid />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background:
            'linear-gradient(77deg,rgba(180, 207, 224, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(237, 237, 237, 1) 98%)',
          paddingTop: '100px',
        }}
      >
        <Container maxWidth="xl">
          <MarketingServices />
        </Container>
      </Box>
    </Box>
  );
}

export default page;
