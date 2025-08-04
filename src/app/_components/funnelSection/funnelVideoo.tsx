import { Stack, Box, CardMedia } from '@mui/material';

export default function FunnelVideoo() {
  return (
    <Stack>
      <Box
        style={{
          pointerEvents: 'none',
        }}
      >
        <CardMedia
          sx={{ height: { md: '0%' }, transform: 'scaleX(-1)' }}
          component="video"
          image="/videos/funnelVideo.mp4"
          title="title"
          controls
          autoPlay
          loop
        />
      </Box>
    </Stack>
  );
}
