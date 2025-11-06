'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import theme from '@/theme/theme';

function LoadingOverlay() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(247, 248, 250, 0.95)', // light background
        color: '#333',
        zIndex: 2,
      }}
    >
      <CircularProgress sx={{ mb: 2 }} />
      <Typography variant="h6">Loading, please wait...</Typography>
    </Box>
  );
}

export default function HeroSection() {
  const controls = useAnimation();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  // Start NOT ready; show loader until video can play.
  const [isReady, setIsReady] = useState(false);
  // Hydration gate (SSR safety): start false and flip true on client.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  const videoSrc = isMobile ? '/videos/realStateVideo.webm' : '/videos/realStateVideo.webm';

  return (
    <Grid
      container
      component={motion.div}
      initial="hidden"
      animate={controls}
      sx={{
        position: 'relative',
        height: '100%',
        minHeight: isMobile ? '80dvh' : '100dvh',
        overflow: 'hidden',
        // alignItems: 'center',
        // justifyContent: 'center',
        // px: { xs: 2, sm: 4, md: 8 },
        // py: { xs: 8, md: 10 },
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsReady(true)} // fires once enough data is loaded to render first frame
          // onCanPlay={() => setIsReady(true)}        // alt: when playback is possible
          // onCanPlayThrough={() => setIsReady(true)} // alt: can likely play to end
          onError={() => setIsReady(true)} // fail-safe: hide loader even if video errors
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Grid
        size={12}
        sx={{
          position: 'absolute',
          zIndex: 20,
          bgcolor: 'red',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            gap: '2.5rem',
            position: 'absolute',
          }}
        >
          {/* --- Title + Subtitle --- */}
          <Box sx={{ px: { xs: 2, sm: 0 } }}>
            <motion.div>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  textAlign: 'center',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                  color: 'white',
                  fontSize: {
                    xs: '1.8rem', // mobile
                    sm: '2.2rem', // tablets
                    md: '3rem', // small laptops
                    lg: '3.5rem', // desktops
                    xl: '3.9rem', // large screens
                  },
                }}
              >
                Revolutionizing Real Estate Branding
              </Typography>
            </motion.div>

            <motion.div>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  maxWidth: { xs: '90%', sm: '75%', md: '60%', lg: '55%' },
                  color: 'rgba(253, 253, 253, 0.7)',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem',
                    lg: '1.15rem',
                  },
                  mt: { xs: 2, sm: 3 },
                }}
              >
                “From 3D walkthroughs to cinematic property films, RankKit helps real estate brands
                connect, engage, and sell through stunning visuals and smart digital strategy.”
              </Typography>
            </motion.div>
          </Box>

          {/* --- Buttons --- */}
          <motion.div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {/* Primary button with glow animation */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 10px rgba(157,111,255,0.3)',
                  '0 0 25px rgba(157,111,255,0.6)',
                  '0 0 10px rgba(157,111,255,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'black',
                  borderRadius: 3,
                  px: { xs: 2.5, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#333',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Connect With Us
              </Button>
            </motion.div>

            {/* Outline button */}
            <Button
              variant="outlined"
              sx={{
                borderRadius: 3,
                px: { xs: 2.5, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.25, md: 1.5 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 600,
                color: 'white',
                borderColor: 'white',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              See More
            </Button>
          </motion.div>
        </motion.div>
      </Grid>
    </Grid>
  );
}
