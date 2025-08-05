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
          autoPlay
          loop
          muted
          style={{
            width: isMobile ? '30dvh' : '40dvh',
            height: isMobile ? '35dvh' : '40dvh',
            aspectRatio: isMobile ? 4 / 5 : 16 / 9,
            objectFit: 'cover',
          }}
        >
          <source src="/videos/funnelVideo.mp4" type="video/mp4" />
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
