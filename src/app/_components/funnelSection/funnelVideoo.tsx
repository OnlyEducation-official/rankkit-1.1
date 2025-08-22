'use client';

import { Stack, Box, useMediaQuery, useTheme } from '@mui/material';

export default function FunnelVideoo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack>
      <Box
        style={{
          pointerEvents: 'none',
        }}
      >
        <video
          loop
          autoPlay
          muted
          playsInline
          style={{
            width: isMobile ? '30dvh' : '55dvh',
            height: isMobile ? '35dvh' : '55dvh',
            aspectRatio: isMobile ? 4 / 5 : 16 / 9,
            objectFit: 'cover',
          }}
        >
          <source src="/videos/funnelv.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* <CardMedia
          sx={{ height: { md: '0%' }, transform: 'scaleX(-1)' }}
          component="video"
          image="/videos/funnelVideo.mp4"
          title="title"
          controls
          autoPlay
          loop
        /> */}
      </Box>
    </Stack>
  );
}
