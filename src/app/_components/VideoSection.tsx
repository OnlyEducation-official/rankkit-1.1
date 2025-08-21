'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export default function VideoSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Ensure this runs only on client after hydration
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Or show a loader

  const videoSrc = isMobile ? '/videos/cover_mobile.webm' : '/videos/cover_desktop.webm';

  return (
    <video
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: isMobile ? '80dvh' : '100dvh',
        aspectRatio: isMobile ? 4 / 5 : 16 / 9,
        objectFit: 'cover',
      }}
    >
      <source src={videoSrc} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
