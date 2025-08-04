import {
  Stack,
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  Paper,
  CardMedia,
} from '@mui/material';

export default function FunnelVideoo() {
  //   const videoSrc = '../..//videos/cover_desktop.mp4';
  const videoSrc = '../../../../videos/cover_desktop.mp4';

  return (
    <Stack>
      <Box
        style={{
          pointerEvents: 'none',
        }}
      >
        {/* <video
          autoPlay
          muted
          loop
          controls
          style={{
            height: '100%',
            width: '100%',
            zIndex: 1,
            border: '.4vw solid #101132',
            position: 'relative',
            // Choose one of the transform options below:
            transform: 'scaleX(-1)', // Flips horizontally (mirror effect)
            // transform: 'scaleY(-1)', // Flips vertically (upside down)
            // transform: 'rotate(90deg)', // Correct way to rotate by 90 degrees clockwise
            // transform: 'rotate(-90deg)', // Correct way to rotate by 90 degrees counter-clockwise
            // transform: 'rotate(180deg)', // Flips upside down
            // If you want to combine transforms, list them space-separated:
            // transform: 'scaleX(-1) rotate(90deg)',
          }}
        >
          <source src="/videos/funnelVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
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
