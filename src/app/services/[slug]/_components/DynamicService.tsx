'use client';

import { Box, Container } from '@mui/material';
import HeroSection from './HeroSection';
import Quotes from './Quotes';
import ServiceSection from './ServiceSection';
import ReadyToConnext from './ReadyToConnext';
import { ServiceType } from '../page';

export default function DynamicService({ service }: { service: ServiceType }) {
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
        <Container maxWidth="lg">
          <HeroSection heroData={service.hero} />
        </Container>
      </Box>

      {/* Motivational Quotes Section */}
      {service?.quotes && <Quotes quotes={service.quotes} />}

      {/* Services Section */}
      <ServiceSection subServices={service.subServices} />

      {/* Connect With Us Section */}
      <ReadyToConnext />
    </Box>
  );
}
