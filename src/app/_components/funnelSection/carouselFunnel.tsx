'use client';

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Box, Paper, useTheme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useFancybox from './useFancybox';

const DUMMY_CARDS = [
  {
    id: 1,
    videoUrl: '/videos/1.mp4',
    coverImage: '/videos/1.jpg',
  },
  {
    id: 2,
    videoUrl: '/videos/2.webm',
    coverImage: '/videos/2.jpg',
  },
  {
    id: 3,
    videoUrl: '/videos/3.webm',
    coverImage: '/videos/3.jpg',
  },
  {
    id: 4,
    videoUrl: '/videos/4.webm',
    coverImage: '/videos/4.jpg',
  },
  {
    id: 5,
    videoUrl: '/videos/5.webm',
    coverImage: '/videos/5.jpg',
  },
  {
    id: 6,
    videoUrl: '/videos/6.webm',
    coverImage: '/videos/6.jpg',
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
        marginBlockStart: 6,
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
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <Box
                ref={fancyboxRef}
                sx={{
                  width: '100%',
                  height: { xs: '100%', md: '100%' },
                  position: 'relative',
                  mb: 2,
                }}
              >
                <a
                  href={card.videoUrl}
                  data-fancybox
                  data-width="50%"
                  data-height="60%"
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      top: '50%',
                      left: '40%',
                    }}
                  >
                    <PlayArrowIcon
                      sx={{
                        zIndex: 100,
                        textDecoration: 'none',
                        color: 'white',
                        border: '1px solid gray',
                        borderRadius: '100%',
                        fontSize: '50px',
                        backgroundColor: 'black',
                        opacity: 0.7,
                      }}
                    />
                  </Box>
                  <img src={card.coverImage} alt="Video poster" width="100%" height="100%" />
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
