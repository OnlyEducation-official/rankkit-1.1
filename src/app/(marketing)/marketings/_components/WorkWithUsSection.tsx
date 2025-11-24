'use client';

import { Container, Grid } from '@mui/material';
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
    { src: commix.src, alt: 'commix', ratio: '4/5' },
    { src: eduniaaLogo.src, alt: 'eduniaaLogo', ratio: '4/5' },
    { src: gutwrench.src, alt: 'gutwrench', ratio: '3/4' },
    { src: kalp.src, alt: 'kalp', ratio: '4/5' },
    { src: madhuban.src, alt: 'madhuban', ratio: '4/5' },
    { src: onlyEdu.src, alt: 'onlyEdu', ratio: '4/5' },
    { src: theDesiOrganics.src, alt: 'theDesiOrganics', ratio: '4/5' },
    { src: tkt.src, alt: 'tkt', ratio: '4/5' },
    { src: vijayIndiaPro.src, alt: 'vijayIndiaPro', ratio: '4/5' },
    { src: zeroDegree.src, alt: 'zeroDegree', ratio: '4/5' },
  ];
  return (
    <Container>
      <Grid
        container
        sx={{ paddingInline: { xs: '15px', md: '24px', lg: '36px' } }}
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
