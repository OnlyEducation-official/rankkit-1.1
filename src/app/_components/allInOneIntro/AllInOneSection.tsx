'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  Container,
} from '@mui/material';

const gaps = {
  xs: {
    min1: '7px',
    min: '10px',
    med: '16.18px',
    max: '26.06px',
  },
  md: {
    min1: '9px',
    min: '13px',
    med: '19px',
    max: '29.06px',
  },
};

export default function AllInOneSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ paddingBlockStart: 10 }}>
      <Stack
        sx={{
          borderRadius: '16px',
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
          padding: { xs: 2, sm: 3, md: 5 },
          backgroundColor: 'grey.200',
          gap: { xs: gaps.xs.max, md: gaps.md.max },
        }}
      >
        <Stack
          spacing={0}
          alignItems={isMobile ? 'flex-start' : 'end'}
          direction={{ xs: 'column', md: 'row' }}
        >
          <Typography
            component="p"
            color="#0A1A67"
            sx={{ typography: { xs: 'h3', md: 'h2' }, fontWeight: '600 !important' }}
          >
            Everything a Brand needs
          </Typography>
          <Typography
            component="p"
            color="#0A1A67"
            sx={{ typography: { xs: 'subtitle1', md: 'h6' }, fontWeight: '600 !important' }}
          >
            - All in One Place.
          </Typography>
        </Stack>

        <Grid
          container
          direction={isMobile ? 'column' : 'row'}
          alignItems="flex-start"
          gap={{ xs: gaps.xs.med, md: gaps.md.med }}
        >
          {/* Left Section: Bullet List */}
          <Grid size={{ xs: 12, md: 'auto' }} sx={{ order: { xs: 2, md: 0 } }}>
            <Stack spacing={{ xs: gaps.xs.min1, md: gaps.md.min1 }}>
              {[
                'Web Development',
                'UX/UI Design',
                'Branding & Multimedia',
                'CreatorNest®',
                'Media Production',
                'SEO Services',
                'Digital Marketing',
              ].map((item) => (
                <Typography key={item} variant="subtitle2">
                  • {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ marginInline: 7, display: { xs: 'none', md: 'block' } }}
          />

          {/* Right Section: Description */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={{ xs: gaps.xs.min1, md: gaps.md.min }}>
              <Typography variant="subtitle2">
                We are a{' '}
                <Box component="span" sx={{ fontWeight: 500 }}>
                  modern studio, a production house, a digital agency,
                </Box>{' '}
                and a{' '}
                <Box component="span" sx={{ fontWeight: 500 }}>
                  strategic partner
                </Box>{' '}
                all rolled into one.
              </Typography>
              <Typography variant="subtitle2">
                {`Whether you're launching, scaling, or redefining`}
              </Typography>
              <Typography variant="subtitle2">
                We handle every pixel, every frame and every click that your brand needs to grow.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  alignSelf: isMobile ? 'stretch' : 'flex-start',
                  borderRadius: '24px',
                  padding: '12px 24px',
                  fontWeight: 600,
                  fontSize: '16px',
                  background: 'linear-gradient(90deg, #FC5A4A 0%, #021266 100%)',
                  textTransform: 'none',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                Connect with Us
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12 }} display={{ xs: 'block', md: 'none' }} sx={{ order: 3 }}>
            <Button variant="contained">Connect with Us</Button>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
