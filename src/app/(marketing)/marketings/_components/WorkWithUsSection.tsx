'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imgOne from '@/assets/images/gallery/gallery1.png';
import commix from '@/assets/workusLogos/commix.png';
import eduniaaLogo from '@/assets/workusLogos/eduniaaLogo.png';
import gutwrench from '@/assets/workusLogos/gutwrench.png';
import kalp from '@/assets/workusLogos/kalp.png';
import madhuban from '@/assets/workusLogos/madhuban.png';
import onlyEdu from '@/assets/workusLogos/onlyEdu.png';
import theDesiOrganics from '@/assets/workusLogos/theDesiOrganics.png';
import tkt from '@/assets/workusLogos/tkt.png';
import vijayIndiaPro from '@/assets/workusLogos/vijayIndiaPro..png';
import zeroDegree from '@/assets/workusLogos/zeroDegree.png';
import MovingLogo from './MovingLogo';
import LogoSlider from './LogoSlider';

export default function WorkWithUsSection() {
  const logos = [
    { src: commix.src, alt: 'commix' },
    { src: eduniaaLogo.src, alt: 'eduniaaLogo' },
    { src: gutwrench.src, alt: 'gutwrench' },
    { src: kalp.src, alt: 'kalp' },
    { src: madhuban.src, alt: 'madhuban' },
    { src: onlyEdu.src, alt: 'onlyEdu' },
    { src: theDesiOrganics.src, alt: 'theDesiOrganics' },
    { src: tkt.src, alt: 'tkt' },
    { src: vijayIndiaPro.src, alt: 'vijayIndiaPro' },
    // { src: zeroDegree.src, alt: 'zeroDegree' },
  ];
  return (
    <Container maxWidth="xl">
      <Box sx={{ textAlign: { xs: 'center', md: 'center' }, mb: 4 }}>
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            typography: { xs: 'h5', md: 'h4', lg: 'h3' },
            fontWeight: 700,
            color: 'text.primary',
            mb: 1.5,
          }}
        >
          Brands That Trust{' '}
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
            Rankkit Media
          </Box>
        </Typography>
      </Box>
      <Grid
        container
        sx={{ paddingInline: { xs: '10px', md: '24px', lg: '36px' } }}
        //   sx={{ paddingInline: { xs: '15px' } }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <LogoSlider logos={logos} speed={25} height={80} gap={20} />
      </Grid>
    </Container>
  );
}
