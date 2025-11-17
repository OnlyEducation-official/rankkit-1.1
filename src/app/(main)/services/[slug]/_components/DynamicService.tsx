'use client';

import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import HeroSection from './HeroSection';
import Quotes from './Quotes';
import ServiceSection from './ServiceSection';
import ReadyToConnext from './ReadyToConnext';
import { servicePages, ServiceType } from '../page';
import CustomGridMedia from './CustomGridMedia';
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
        <Container maxWidth="lg">
          <HeroSection heroData={service.hero} />
        </Container>
      </Box>

      {/* Motivational Quotes Section */}
      {service?.quotes && <Quotes quotes={service.quotes} />}

      {/* Cover photo section */}
      {service.cover && slug !== 'media-production' && (
        <Container sx={{ marginBlock: 10 }}>
          {service.cover?.half && (
            <Grid container spacing={2} sx={{ height: '80vh' }}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ height: 1 }}>
                <Image
                  alt="Hello world"
                  src={service.cover.half.img1}
                  style={{ width: '100%', height: '100%', aspectRatio: '1.51 / 1' }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ height: 1 }}>
                <Image
                  alt="Hello world"
                  src={service.cover.half.img2}
                  style={{ width: '100%', height: '100%', aspectRatio: '0.72 / 1' }}
                />
              </Grid>
            </Grid>
          )}
          {service.cover?.full && (
            <Grid container spacing={2} sx={{ height: '80vh' }}>
              <Grid size={12} sx={{ height: 1 }}>
                <Image
                  alt="Hello world"
                  src={service.cover.full?.img}
                  style={{ width: '100%', height: '100%', aspectRatio: '0.72 / 1' }}
                />
              </Grid>
            </Grid>
          )}
        </Container>
      )}
      {slug === 'media-production' && <CustomGridMedia />}

      {/* Services Section */}
      <ServiceSection subServices={service.subServices} />

      {/* Connect With Us Section */}
      <ReadyToConnext />
    </Box>
  );
}
