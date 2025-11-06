'use client';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Spline from '@splinetool/react-spline';


export default function HeroSectionRealEstate() {
  return (
    <Grid
      container
      sx={{
        width: '100%',
        minHeight: { xs: 'auto', md: '100vh' },
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden', // Prevent overall overflow
      }}
    >
      {/* Left Section */}
      <Grid
        size={{ xs: 12, sm: 12, md: 7, lg: 7 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 3, sm: 6, md: 10, lg: 13 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: { xs: 4, sm: 5, md: 7 },
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 500,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Revolutionizing Real Estate Branding
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.65rem' },
                lineHeight: 1.3,
                fontWeight: 500,
              }}
            >
              “From 3D walkthroughs to cinematic property films, RankKit helps real estate brands
              connect, engage, and sell through stunning visuals and smart digital strategy.”
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
              size="large"
              sx={{
                fontWeight: 600,
                boxShadow:
                  ' 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px -2px 4px rgba(0, 0, 0, 0.1), inset 0px -2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '50px',
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Grid>

      {/* Right Section (Spline Fixed + Contained) */}
      <Grid
        size={{ xs: 12, sm: 12, md: 5, lg: 5 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#fff',
          position: 'relative',
          overflow: 'hidden', // critical fix
          minHeight: { xs: 300, sm: 400, md: 'calc(100%- 199px)' },
          padding: { xs: 2, sm: 4, md: 0 },
        }}
      >
        {/* Contained Spline Wrapper */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& canvas': {
              width: '100% !important',
              height: '100% !important',
              display: 'block',
              objectFit: 'contain', // Keeps Spline visible without clipping
            },
          }}
        >
          <Spline scene="https://prod.spline.design/18hRcuDmXppMwUUa/scene.splinecode" />
        </Box>
      </Grid>
    </Grid>
  );
}
