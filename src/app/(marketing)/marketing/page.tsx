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
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '40px', md: '60px', lg: '60px', xl: '60px' },
          left: { xs: '20px', sm: '35px', md: '48px', lg: '88px', xl: '95px' },
          // top: { xs: '25px', sm: '35px', md: '-25px', xl: '-70px' },
          // left: { sm: '10px', md: '32px', lg: '64px' },
          zIndex: 2,
        }}
      >
        <Box sx={{ position: 'relative', width: '135px', aspectRatio: 4.2 / 1 }}>
          <Image src={logo} fill alt="RankKit Logo" style={{ objectFit: 'contain' }} />
        </Box>
      </Box>
      <Box
        id="banner"
        sx={{
          minHeight: { md: '100dvh' },
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
              paddingInline: { md: 3, lg: 8 },
              // position: 'relative',
            }}
            spacing={{ xs: 7, md: 0 }}
          >
            {/* Header img */}
            {/*  */}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                height: { md: 1 },
                order: { xs: 2, md: 0 },
                paddingBlockEnd: { xs: 10, md: 0 },
              }}
            >
              <Typography variant="h1" sx={{ typography: { xs: 'h5', md: 'h3', lg: 'h1' } }}>
                <Typography variant="inherit" sx={{ fontWeight: 500 }}>
                  Drive 3.5X Growth
                </Typography>
                <Typography variant="inherit" sx={{ fontWeight: 500 }}>
                  With 360 Marketing
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  maxWidth: { md: 1, lg: 0.85, xl: 0.75 },
                  marginBlockStart: 5,
                  lineHeight: 1.5,
                }}
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
                minHeight: { xs: '100dvh', md: 1 },
                display: { xs: 'flex', md: 'block' },
                justifyContent: { xs: 'center', md: 'end' },
                // alignItems: 'center',
                paddingBlockStart: { xs: 15, md: 0 },
              }}
            >
              <Grid container>
                <Grid size={{ xs: 0, md: 1.5, lg: 3 }} />
                <Grid size={{ xs: 12, md: 10.5, lg: 9 }}>
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
