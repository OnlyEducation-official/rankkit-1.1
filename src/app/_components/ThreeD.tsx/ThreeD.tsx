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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo voluptates ut officiis,
          vero minima, placeat illo nihil culpa vitae incidunt in reprehenderit minus voluptate,
          debitis odit recusandae quas dolor excepturi eligendi laborum deserunt commodi illum! Odit
          maxime quis incidunt non ea amet, reprehenderit deserunt, nostrum sequi fugit repellat
          ipsum dolore quia nihil ratione commodi voluptatibus a. voluptatibus laborum reprehenderit
          omnis? Quo et corporis, suscipit totam? Quo et corporis, suscipit totam? Quo et corporis,
          suscipit totam ? Quo et corporis, suscipit totam qui earum repudiandae dolorum aut quam
          placeat facere quod in deleniti, tempora voluptate molestias! Maxime sed adipisci
          perferendis fugiat voluptatum obcaecati odit mollitia dolor.
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
              <source src="/videos/watch.mp4" type="video/mp4" />
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
              <source src="/videos/poster.mp4" type="video/mp4" />
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
              <source src="/videos/comix-vertical.mp4" type="video/mp4" />
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
              <source src="/videos/cosmix.mp4" type="video/mp4" />
            </video>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
