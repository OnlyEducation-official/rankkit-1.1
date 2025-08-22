'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery, useTheme } from '@mui/material';

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

export default function VideoSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Start NOT ready; show loader until video can play.
  const [isReady, setIsReady] = useState(false);
  // Hydration gate (SSR safety): start false and flip true on client.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  const videoSrc = isMobile ? '/videos/cover_mobile.webm' : '/videos/cover_desktop.webm';

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '80dvh' : '100dvh',
        overflow: 'hidden',
        borderRadius: 3,
      }}
    >
      {!isReady && <LoadingOverlay />}

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
  );
}
