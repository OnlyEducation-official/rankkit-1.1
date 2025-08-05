'use client';

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Box, Paper, useTheme } from '@mui/material';
import useFancybox from './useFancybox';

const DUMMY_CARDS = [
  {
    id: 1,
    videoUrl: 'https://backend.realatte.com/uploads/reel8_c39f398558.mp4',
    coverImage:
      'https://realatte.com/_next/image?url=https%3A%2F%2Fbackend.realatte.com%2Fuploads%2Freel8_f3c47323bf.png&w=2048&q=75',
  },
  {
    id: 2,
    videoUrl: 'https://backend.realatte.com/uploads/reel4_cd4ecc07b2.mp4',
    coverImage:
      'https://realatte.com/_next/image?url=https%3A%2F%2Fbackend.realatte.com%2Fuploads%2Freel4_9082f8fe17.png&w=2048&q=75',
  },
  {
    id: 3,
    videoUrl: 'https://backend.realatte.com/uploads/reel5_b8d40ef4dd.mp4',
    coverImage:
      'https://realatte.com/_next/image?url=https%3A%2F%2Fbackend.realatte.com%2Fuploads%2Freel5_99ae013600.png&w=2048&q=75',
  },
];

function SplideCarousel() {
  const theme = useTheme();

  const [fancyboxRef] = useFancybox({
    // Your custom options
  });

  const splideOptions = {
    type: 'loop',
    gap: theme.spacing(3),
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    perPage: 3,
    focus: 'center',
    padding: { left: theme.spacing(1), right: theme.spacing(1) },
    breakpoints: {
      [theme.breakpoints.values.sm - 1]: {
        perPage: 1,
        gap: theme.spacing(1.5),
        padding: { left: theme.spacing(0), right: theme.spacing(0) },
      },

      [theme.breakpoints.values.sm]: {
        perPage: 1.5,
        gap: theme.spacing(2),
      },

      [theme.breakpoints.values.md]: {
        perPage: 2.5,
        gap: theme.spacing(2.5),
      },

      [theme.breakpoints.values.lg]: {
        perPage: 3.5,
        gap: theme.spacing(3),
      },
    },
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
        my: 6,
        position: 'relative',
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Splide options={splideOptions} className="my-splide-carousel" ref={fancyboxRef}>
        {DUMMY_CARDS.map((card) => (
          <SplideSlide key={card.id}>
            <Paper
              elevation={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                minHeight: { xs: 300, sm: 350, md: 400 },
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                bgcolor: 'background.paper',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <Box
                ref={fancyboxRef}
                sx={{ width: '100%', height: { xs: 150, md: 200 }, position: 'relative', mb: 2 }}
              >
                <a href={card.videoUrl} data-fancybox data-width="1500" data-height="900">
                  <img src={card.coverImage} alt="Video poster" width="310" height="500" />
                </a>
              </Box>
            </Paper>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
}

export default SplideCarousel;
