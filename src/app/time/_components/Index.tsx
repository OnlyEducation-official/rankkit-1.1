'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { Container } from '@mui/material';
import HowWeWorkSection from './HowWeWorkSection';
import SampleSection from './SampleSection';
import HeroSection from './HeroSection';
import SeoSection from './SeoSection';
import SwiperComponent from './SwiperComponent';
import InteractiveServices from './InteractiveServices';
import Feature from './Feature';
import FeatureSection from './FeatureSection';
import HeroSec from './HeroSec';
// import OurDevelopmentProcess from './OurDevelopmentProcess';
// dynamic import ssr false
const OurDevelopmentProcess = dynamic(() => import('./OurDevelopmentProcess'), { ssr: false });
const ScrollProgressSection = dynamic(() => import('./ScrollProgressSection'), { ssr: false });

export default function Index() {
  return (
    <Container maxWidth="xl">
      {/* <ScrollProgressSection />
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2>IntersectionObserver Trigger</h2>
      </div> */}
      {/* <SampleSection /> */}
      <HeroSec />
      <FeatureSection />
      <SeoSection />
      <SwiperComponent />
      <HeroSection />
      <InteractiveServices />
      {/* <ScrollProgressSection /> */}
      <OurDevelopmentProcess />
      {/* <HowWeWorkSection /> */}
      {/* <SampleSection /> */}
      {/* <SampleSection /> */}
    </Container>
  );
}
