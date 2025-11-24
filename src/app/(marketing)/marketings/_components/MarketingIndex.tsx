import { Box } from '@mui/material';
import React from 'react';
import CoreServices from './CoreServices';
import HeroSectionMarketing from './HeroSectionMarketing';
import CountingSection from './CountingSection';

import BrandCta from './BrandCta';
import ProvenProcess from './ProvenProcess';

export default function MarketingIndex() {
  return (
    <Box>
      <HeroSectionMarketing />
      {/* <BentoGrid /> */}
      <CountingSection />
      <CoreServices />
      <BrandCta />
      <ProvenProcess />
    </Box>
  );
}
