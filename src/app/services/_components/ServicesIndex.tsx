'use client';

import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import CoreServices from './CoreServices';
import StudioAdvantage from './StudioAdvantage';
import PopularPackages from './PopularPackages';
import AnimatedStats from './AnimatedStats';
import FinalCTA from './FinalCTA';

export default function ServicesIndex() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <Box component="main" sx={{ pt: 8 }}>
        <HeroSection />
        <CoreServices />
        <StudioAdvantage />
        <PopularPackages />
        <AnimatedStats />
        <FinalCTA />
      </Box>
    </Box>
  );
}
