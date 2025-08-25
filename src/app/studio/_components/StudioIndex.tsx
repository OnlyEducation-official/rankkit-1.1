'use client';

import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import ValueSnapshot from './ValueSnapshot';
import AboutStudio from './AboutStudio';
import FeatureBanner from './FeatureBanner';
import FacilitiesOverview from './FacilitiesOverview';
import MultipleSetups from './MultipleSetups';
import PaperDropWalls from './PaperDropWalls';
import VanityRoom from './VanityRoom';
import ProfessionalEquipment from './ProfessionalEquipment';
import CreativeProps from './CreativeProps';
import Gallery from './Gallery';
import Pricing from './Pricing';
import BookingTerms from './BookingTerms';
import StudioUsage from './StudioUsage';

export default function StudioIndex() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.6,
        color: '#333333',
      }}
    >
      <HeroSection />
      <ValueSnapshot />
      <AboutStudio />
      <FeatureBanner />
      <FacilitiesOverview />
      <MultipleSetups />
      <PaperDropWalls />
      {/* <GreenScreenZone /> */}
      <VanityRoom />
      <ProfessionalEquipment />
      <CreativeProps />
      <Gallery />
      <Pricing />
      <BookingTerms />
      <StudioUsage />
    </Box>
  );
}
