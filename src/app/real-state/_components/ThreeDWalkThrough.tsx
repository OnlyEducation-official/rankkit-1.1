'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import theme from '@/theme/theme';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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

export default function ThreeDWalkThrough() {
  const [readMore, setReadMore] = useState(false);
  const controls = useAnimation();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Start NOT ready; show loader until video can play.
  const [isReady, setIsReady] = useState(false);
  console.log('isReady: ', isReady);
  // Hydration gate (SSR safety): start false and flip true on client.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  const videoSrc = isMobile ? '/videos/realStateVideo.webm' : '/videos/realStateVideo.webm';
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };
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
      {/* SHOW LOADER WHEN VIDEO IS NOT READY */}
      {!isReady && <LoadingOverlay />}

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
          // bgcolor: 'red',
          transform: 'translate(-50%, -50%)',
          top: '25%',
          left: '50%',
          //   display: 'flex',
          //   flexDirection: 'column',
          //   alignItems: 'center',
          //   justifyContent: 'center',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            height: '100%',
            gap: '1.5rem',
            position: 'absolute',
            marginInline: '3rem',
          }}
        >
          {/* --- Title + Subtitle --- */}
          <Box
            sx={{
              px: { xs: 2, sm: 0 },
              //   display: 'flex',
              //   flexDirection: 'column',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <motion.div>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  //   textAlign: 'center',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                  color: 'white',
                  textShadow: `
      8px 1px 0px rgba(0, 0, 0, 0.9), 8px 5px 11px rgba(0, 0, 0, 0.6), 5px 0px 13px rgba(0, 0, 0, 0.5)
    `,
                  //   paddingInline: 3,
                  fontSize: {
                    xs: '1.8rem', // mobile
                    sm: '2.2rem', // tablets
                    md: '3rem', // small laptops
                    lg: '3.5rem', // desktops
                    xl: '3.9rem', // large screens
                  },
                }}
              >
                3D Walkthrough
              </Typography>
            </motion.div>

            {/* <motion.div>
              <Typography
                variant="h6"
                sx={{
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
                  width: { xs: '100%', md: '50%', lg: '40%' },
                }}
              >
                We design immersive 3D walkthroughs that bring upcoming projects to life, allowing
                clients to visualize architecture, interiors, and ambiance with precision before
                completion.”
              </Typography>
            </motion.div> */}
            {/* <motion.div
              style={{ display: 'flex', gap: '1rem', justifyContent: 'start', flexWrap: 'wrap' }}
            >
              <Button variant="text" size="large" onClick={() => setReadMore(!readMore)}>
                Read More
              </Button>
            </motion.div> */}
            <AnimatePresence>
              {!readMore && (
                <motion.div
                  key="btn"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'start',
                    flexWrap: 'wrap',
                  }}
                >
                  <Button
                    variant="text"
                    size="large"
                    onClick={() => setReadMore(true)}
                    sx={{
                      fontWeight: 600,
                      //   textAlign: 'center',
                      letterSpacing: '-0.5px',
                      lineHeight: 1.2,
                      color: 'white',
                      boxShadow: 'none',
                      '&:hover': { boxShadow: 'none' },
                      '&:active': { boxShadow: 'none' },
                      '&:focus': { boxShadow: 'none' },
                    }}
                    endIcon={
                      <motion.div
                        animate={{ y: [0, 6, 0] }} // bounce ↓ and back up
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 22 }} />
                      </motion.div>
                    }
                  >
                    Read More
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {readMore && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      maxWidth: { xs: '90%', sm: '75%', md: '60%', lg: '40%' },
                      color: 'rgba(253, 253, 253, 0.7)',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      fontSize: {
                        xs: '0.9rem',
                        sm: '1rem',
                        md: '1.1rem',
                        lg: '1.15rem',
                      },
                    }}
                  >
                    {`We design immersive 3D walkthroughs that bring upcoming projects to life, allowing
        clients to visualize architecture, interiors, and ambiance with precision before
        completion.`
                      .split(' ')
                      .map((word, i) => (
                        <motion.span
                          key={i}
                          variants={item}
                          style={{ display: 'inline-block', marginRight: '6px' }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    {/* We design immersive 3D walkthroughs that bring upcoming projects to life,
                    allowing clients to visualize architecture, interiors, and ambiance with
                    precision before completion. */}
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
}
