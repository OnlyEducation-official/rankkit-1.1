'use client';

import { Stack, useMediaQuery, useTheme } from '@mui/material';

export default function FunnelVideoo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack sx={{ height: 1, pointerEvents: 'none' }}>
      <video
        loop
        autoPlay
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: isMobile ? 4 / 5 : 16 / 9,
          objectFit: isMobile ? 'contain' : 'inherit',
          borderRadius: '15px',
        }}
      >
        <source src="/videos/funnelv.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </Stack>
  );
}
