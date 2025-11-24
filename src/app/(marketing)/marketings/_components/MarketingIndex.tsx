import { Box } from '@mui/material';
import React from 'react';
import CoreServices from './CoreServices';
import HeroSectionMarketing from './HeroSectionMarketing';
import CountingSection from './CountingSection';

import BrandCta from './BrandCta';
import ProvenProcess from './ProvenProcess';
import CustomizedSteppers from './Stepper';

export default function MarketingIndex() {
  return (
    <Box>
      <HeroSectionMarketing />
      {/* <BentoGrid /> */}
      <CustomizedSteppers />
      <CountingSection />
      <CoreServices />
      <BrandCta />
      <ProvenProcess />
    </Box>
  );
}
