import { Box } from '@mui/material';
import React from 'react';
import HeroSectionMarketing from './HeroSectionMarketing';
import CountingSection from './CountingSection';

export default function MarketingIndex() {
  return (
    <Box>
      <HeroSectionMarketing />
      {/* <BentoGrid /> */}
      <CountingSection />
    </Box>
  );
}
