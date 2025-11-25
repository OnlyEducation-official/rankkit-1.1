import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo2.png';
import bannerImg from '@/assets/images/bannerContactUs.jpg';
import MarketingForm from '../../_components/MarketingForm';

export default function HeroSectionMarketing() {
  return (
    <Box
      sx={{
        minHeight: { md: '100dvh' },
        display: { xs: 'block', md: 'flex' },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        // paddingBlockStart: { xs: '105px', md: 0 },
      }}
      // id="servicesSection"
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundImage: `url(${bannerImg.src})`,
          backgroundSize: 'cover',
          filter: 'blur(7px)',
          opacity: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '20px', md: '60px' },
          left: { xs: '20px', md: '48px' },
        }}
      >
        <Box
          sx={{ position: 'relative', width: { xs: '115px', md: '135px' }, aspectRatio: 4.2 / 1 }}
        >
          <Image src={logo} alt="logo" fill />
        </Box>
      </Box>
      {/* Logo */}
      {/*  */}
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* sx={{ paddingBlockStart: '105px' }} */}
        <Grid container spacing={3} sx={{ paddingBlockStart: '50px' }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              // backgroundColor: 'red',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'start' },
              paddingBlockStart: { xs: 3, md: 0 },
            }}
          >
            <Box sx={{ width: { xs: '90%', sm: '70%', md: '100%' } }}>
              <Typography
                variant="h3"
                sx={{
                  typography: { xs: 'h6', md: 'h5', lg: 'h1' },
                  textAlign: { xs: 'center', md: 'start' },
                  color: 'text.primary',
                  lineHeight: { xs: 1.3, sm: 1.6 },
                  pb: { xs: 1.5, md: 2 },
                  fontWeight: 600,
                }}
              >
                Boost Brand Visibility by
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  {' '}
                  70%{' '}
                </Box>
                <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} />
                with &nbsp;
                <Box component="span" sx={{ color: 'error.main', fontWeight: 700 }}>
                  Precision Targeting
                </Box>
              </Typography>
              <Typography
                variant="inherit"
                sx={{
                  typography: { xs: 'caption', md: 'subtitle1' },
                  textAlign: { xs: 'center', md: 'justify' },
                  fontWeight: 500,
                  color: 'text.primary',
                  lineHeight: 1.4,
                }}
              >
                We help brands reach{' '}
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  high-intent audiences
                </Box>
                &nbsp;using{' '}
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  advanced insights
                </Box>{' '}
                and&nbsp;
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  behavioural analytics
                </Box>
                . Your{' '}
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {' '}
                  ADS
                </Box>{' '}
                appear only where they{' '}
                <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {' '}
                  deliver real impact—driving performance
                </Box>
                , not wasted spend.
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'end' },
              paddingBlock: { xs: 3 },
            }}
            id="servicesSection"
          >
            <MarketingForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
