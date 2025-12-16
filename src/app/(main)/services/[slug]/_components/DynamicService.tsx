'use client';

import { Box, Container } from '@mui/material';
import HeroSection from './HeroSection';
import { servicePages, ServiceType } from '../page';
import GridSections from './gridSection/GridSectionsMain';
// img

export default function DynamicService({
  service,
  slug,
}: {
  service: ServiceType;
  slug: servicePages;
}) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #eeeeee)',
        // minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 10,
          py: { xs: 15, lg: 16 },
        }}
      >
        {/* Grdi section for technologiores */}

        <Container maxWidth="lg">
          <GridSections />
        </Container>
        <Container maxWidth="lg">
          <HeroSection heroData={service.hero} />
        </Container>
      </Box>
    </Box>
  );
}
