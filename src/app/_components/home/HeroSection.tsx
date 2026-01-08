'use client';

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import imgOne from '@/assets/images/c.jpg';
import Image from 'next/image';
import { PhonelinkLockOutlined } from '@mui/icons-material';
// import GlowButton from './GlowButton';

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, sm: 10 },
        pb: { xs: 6, sm: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* LEFT: Content (50%) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                component="h1"
                sx={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', // 32 → 52
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-geist)',
                  // fontSize: { xs: 32, sm: 44, md: 52 },
                  // lineHeight: 1.1,
                  // fontWeight: 800,
                }}
              >
                Digital Marketing Agency for SEO, Website Development & Influencer Growth
              </Typography>

              <Typography
                component="p"
                variant="subtitle1"
                sx={{
                  // fontSize: { xs: 16, sm: 18 },
                  fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', // 16 → 18
                  lineHeight: 1.7,
                  fontWeight: 500,
                  color: 'text.secondary',
                  fontFamily: 'var(--font-inter), sans-serif',
                  // lineHeight: 1.7,
                }}
              >
                We help brands generate leads and sales using{' '}
                <Typography
                  component="strong"
                  variant="body1"
                  sx={{ fontWeight: 'bold', color: 'primary.main' }}
                >
                  performance marketing
                </Typography>
                ,{' '}
                <Typography
                  component="strong"
                  variant="body1"
                  sx={{ fontWeight: 'bold', color: 'primary.main' }}
                >
                  SEO services
                </Typography>
                ,{' '}
                <Typography
                  component="strong"
                  variant="body1"
                  sx={{ fontWeight: 'bold', color: 'primary.main' }}
                >
                  high-converting websites
                </Typography>
                , and{' '}
                <Typography
                  component="strong"
                  variant="body1"
                  sx={{ fontWeight: 'bold', color: 'primary.main' }}
                >
                  influencer marketing
                </Typography>
                —built for measurable ROI, not vanity metrics.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  size="large"
                  variant="contained"
                  href="#contact"
                  sx={{
                    px: 3,
                    py: 1.2,
                    fontSize: 'clamp(0.875rem, 1.1vw, 1rem)', // 14 → 16
                    fontWeight: 600,
                    lineHeight: 1.2,
                    borderRadius: 1.5,
                    textTransform: 'none',
                    boxShadow: 'none',
                  }}
                >
                  Book a Free Strategy Call
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  href="#services"
                  sx={{
                    px: 3,
                    py: 1.2,
                    fontSize: 'clamp(0.875rem, 1.1vw, 1rem)', // 14 → 16
                    fontWeight: 600,
                    lineHeight: 1.2,
                    textTransform: 'none',
                  }}
                >
                  Explore Services
                </Button>
              </Stack>

              <Typography
                component="p"
                sx={{
                  fontSize: 'clamp(0.8125rem, 1vw, 0.875rem)', // 13 → 14
                  lineHeight: 1.6,
                  fontWeight: 400,
                  color: 'text.secondary',
                }}
              >
                Trusted by startups, local businesses, and growing brands across India.
              </Typography>
            </Stack>
          </Grid>

          {/* RIGHT: Visual / Image / Stats (50%) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%', // ✅ REQUIRED
                height: { xs: 260, sm: 320, md: 420 }, // ✅ stable height
                borderRadius: 1.5,
                bgcolor: 'grey.100',
                overflow: 'hidden', // ✅ REQUIRED
              }}
            >
              <Image
                src={imgOne}
                alt="Hero Image"
                fill
                priority
                style={{
                  objectFit: 'cover', // ✅ NO CROPPING
                  objectPosition: 'down down',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
