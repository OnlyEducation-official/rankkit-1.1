import { Box } from '@mui/material';
import React from 'react';
import CoreServices from './CoreServices';
import HeroSectionMarketing from './HeroSectionMarketing';
import CountingSection from './CountingSection';
import BrandCta from './BrandCta';
// import ProvenProcess from './ProvenProcess';
import CustomizedSteppers from './Stepper';
import WorkWithUsSection from './WorkWithUsSection';

export default function MarketingIndex() {
  return (
    <Box>
      <HeroSectionMarketing />
      {/* <BentoGrid /> */}
      <CoreServices />
      <CustomizedSteppers />
      <WorkWithUsSection />
      <CountingSection />
      <BrandCta />
      {/* <ProvenProcess /> */}
    </Box>
  );
}
