'use client';

import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import galleryOne from '@/assets/images/gallery/gallery1.png';
import React from 'react';

export default function HeroSection() {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 6 }}
      sx={{
        minHeight: { xs: 'auto', md: '70vh' },
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        px: { xs: 2, sm: 4, md: 6 },
        alignItems: 'center',
      }}
    >
      {/* ---------------- LEFT CONTENT ---------------- */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 5 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography
            variant="h3"
            sx={{
              position: 'relative',
              display: 'inline-block',
              pb: 1.5,

              fontSize: {
                xs: 'clamp(1.6rem, 5vw, 2rem)',
                sm: 'clamp(1.8rem, 4vw, 2.4rem)',
                md: 'clamp(2rem, 3vw, 2.8rem)',
                lg: '3rem',
              },
              fontWeight: 700,

              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                height: { xs: 3, md: 5 },
                width: '50%',
                backgroundColor: '#000',
                borderRadius: 10,
              },
            }}
          >
            eCommerce SEO Service In Mumbai
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: '1.25rem',
                sm: '1.4rem',
                md: '1.6rem',
                lg: '1.8rem',
              },
              fontWeight: 600,
            }}
          >
            Amplify Your eCommerce SEO
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontSize: {
                xs: '0.95rem',
                sm: '1rem',
                md: '1.05rem',
              },
              lineHeight: 1.7,
              color: 'text.secondary',
              maxWidth: { md: '90%' },
            }}
          >
            We specialize in providing top-notch SEO services for e-commerce businesses. Our team of
            highly skilled professionals has years of experience in the industry and can help grow
            your website and increase your online sales. We offer customizable SEO plans that are
            tailored to your specific needs, including keyword research, on-page optimization, link
            building, content creation, and more.
          </Typography>
        </Box>

        <Box>
          <Button
            sx={{
              bgcolor: '#ee6223',
              color: 'common.white',
              px: { xs: 3, sm: 4 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 2,
              textTransform: 'capitalize',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              '&:hover': { bgcolor: '#ee6223' },
            }}
          >
            Get Quote
          </Button>
        </Box>
      </Grid>

      {/* ---------------- RIGHT IMAGE ---------------- */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: {
              xs: '4 / 5', // mobile (portrait-friendly)
              sm: '4 / 3', // tablets
              md: '16 / 9', // desktop (landscape)
            },
            overflow: 'hidden',
            borderRadius: 3,
          }}
        >
          <Image
            src={galleryOne}
            alt="RankKit Logo"
            fill
            priority
            sizes="
              (max-width: 599px) 100vw,
              (max-width: 899px) 100vw,
              (max-width: 1199px) 50vw,
              50vw
            "
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
