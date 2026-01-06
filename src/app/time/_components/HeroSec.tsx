import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import imageOne from '@/assets/images/bakeCard.jpg';
import React from 'react';

export default function HeroSec() {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid container justifyContent="center" alignItems="center" size={12}>
        <Grid size={6}>
          <Box>
            <Typography variant="h1" sx={{ fontWeight: 700 }}>
              {' '}
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #2563eb, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {`'Unmissable'`}{' '}
              </Typography>
              Magic to Make You Hero Section{' '}
              <Typography component="span" variant="h1" sx={{ fontWeight: 700 }}>
                {`'Unmissable'`}{' '}
              </Typography>{' '}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, color: 'grey.600' }}>
              Imagine your brand trending in every feed - our SMO strategies and tactics make it
              happen.
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 400, // fixed upper bound
                aspectRatio: '1 / 1', // 🔑 stable layout
                overflow: 'hidden',
                mx: 'auto',

                display: 'flex',
                alignItems: 'center', // ✅ vertical center
                justifyContent: 'center', // ✅ horizontal center
                // Optional minimum size
                minWidth: { xs: 280, sm: 300 },
              }}
            >
              <Image
                src={imageOne}
                alt="Feature Image"
                fill
                sizes="(max-width: 900px) 100vw, 600px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container size={12}>
        <Grid size={6}>
          <h1>Hero Section</h1>
        </Grid>
        <Grid size={6}>
          <h1>Hero Section</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}
