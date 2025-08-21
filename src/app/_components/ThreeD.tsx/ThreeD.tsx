import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function ThreeD() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h1"
        fontWeight={600}
        color="primary.main"
        sx={{ marginBlockEnd: { xs: '30px', md: 5 } }}
      >
        Our 3D designers impacts
      </Typography>
      {/* grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'auto', sm: 'repeat(2, 1fr)' },
          gridTemplateRows: {
            xs: 'auto repeat(4, 250px)',
            sm: 'auto repeat(3, 300px)',
            md: 'repeat(4, 320px)',
          },
          gap: 5,
        }}
      >
        <Box
          sx={{
            gridRow: '1',
            gridColumn: { xs: '1', sm: '1 / span 2', md: '1' },
            textAlign: 'justify',
          }}
        >
          We bring imagination to life through precision, creativity, and cutting-edge technology.
          Our 3D design solutions help brands tell their story in the most engaging way — from
          high-end product reveals to immersive architectural walkthroughs and animations that
          simplify complex ideas. By blending photorealism with strategic storytelling, we create
          visuals that not only look stunning but also drive results. Our work spans industries,
          helping clients market products more effectively, accelerate approvals, and create
          experiences that stand out in a crowded digital space. With every project, we push the
          limits of digital visualization, turning ideas into impactful realities.
        </Box>
        {/* second */}
        <Box
          sx={{
            gridRow: { xs: '2 / span 2', sm: '2 / span 2', md: '1 / span 2' },
            gridColumn: { xs: '1', sm: '1 / span 1', md: '2' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              borderRadius: 3,
              width: 1,
              height: 1,
              aspectRatio: { md: 0.56 / 1 },
            }}
          >
            <video
              loop
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              autoPlay
              muted
            >
              <source src="/videos/watch.webm" type="video/webm" />
            </video>
          </Box>
        </Box>
        {/* Third */}
        <Box sx={{ gridRow: '2 / span 2', gridColumn: '1', display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              borderRadius: 3,
              width: 1,
              height: 1,
              aspectRatio: 0.56 / 1,
            }}
          >
            <video
              loop
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              autoPlay
              muted
            >
              <source src="/videos/poster.webm" type="video/webm" />
            </video>
          </Box>
        </Box>
        {/* Fourth */}
        <Box
          sx={{
            gridRow: { xs: '4 / span 2', sm: '2 / span 2', md: '3 / span 2' },
            gridColumn: { xs: '1', sm: '2 / span 1', md: '2' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              borderRadius: 3,
              width: 1,
              height: 1,
              aspectRatio: { md: 0.56 / 1 },
            }}
          >
            <video
              loop
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              autoPlay
              muted
            >
              <source src="/videos/comix-vertical.webm" type="video/webm" />
            </video>
          </Box>
        </Box>
        {/* Fifth */}
        <Box sx={{ gridRow: '4', gridColumn: '1', display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              borderRadius: 3,
              width: 1,
              height: 1,
              aspectRatio: 0.56 / 1,
            }}
          >
            <video
              loop
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              autoPlay
              muted
            >
              <source src="/videos/cosmix-landscape.webm" type="video/webm" />
            </video>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
