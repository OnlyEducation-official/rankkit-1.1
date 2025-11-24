'use client';

import { Grid } from '@mui/material';
import React from 'react';
import imgOne from '@/assets/Logo/commix.png';
import MovingLogo from './MovingLogo';
import LogoSlider from './LogoSlider';

export default function WorkWithUsSection() {
  const logos = [
    { src: imgOne, alt: 'React' },
    { src: imgOne, alt: 'JavaScript' },
    { src: imgOne, alt: 'HTML' },
    { src: imgOne, alt: 'CSS' },
    { src: imgOne, alt: 'Node.js' },
  ];
  return (
    <Grid
      container
      sx={{ paddingInline: { xs: '15px', md: '24px', lg: '36px' } }}
      //   sx={{ paddingInline: { xs: '15px' } }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <LogoSlider logos={logos} speed={25} height={80} gap={48} />
    </Grid>
  );
}
