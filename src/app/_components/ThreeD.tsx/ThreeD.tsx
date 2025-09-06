'use client';

import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const offerDataLists = [
  'High-end product reveals that captivate audiences.',
  'Immersive architectural walkthroughs for real estate and design.',
  '3D animations to simplify complex concepts.',
  'Photorealistic renders that blend beauty with strategy.',
  'Cross-industry solutions to market faster and stand out.',
];

export default function ThreeD() {
  const mediaMdSizeFrom900To1100 = useMediaQuery('(min-width: 900px) and (max-width: 1100px)');
  const mediaMdSizeFrom1100To1200 = useMediaQuery('(min-width: 1100px) and (max-width: 1200px)');
  const mediaMdSizeFrom900To1000 = useMediaQuery('(min-width: 900px) and (max-width: 1000px)');
  return (
    <Box sx={{ paddingBlock: { xs: 6, md: 12 }, bgcolor: 'grey.300' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ fontWeight: 600, color: 'error.main', marginBlockEnd: { xs: '30px', md: 4 } }}
        >
          Our{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            3D designers impacts
          </Box>
        </Typography>

        {/* grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'auto', sm: 'repeat(2, 1fr)' },
            gridTemplateRows: {
              xs: 'auto repeat(4, 250px)',
              sm: 'auto repeat(2, 300px)',
              // eslint-disable-next-line no-nested-ternary
              md: mediaMdSizeFrom1100To1200
                ? 'repeat(4, 360px)'
                : mediaMdSizeFrom900To1000
                  ? 'repeat(4, 360px)'
                  : 'repeat(4, 340px)',
              lg: 'repeat(4, 320px)',
            },
            gap: 5,
          }}
        >
          <Box
            sx={{
              gridRow: '1',
              gridColumn: { xs: '1', sm: '1 / span 2', md: '1' },
            }}
          >
            <Typography variant="body1">
              We turn imagination into reality with precision, creativity and advanced 3D
              technology. From product launches to architectural walkthroughs, our visuals combine
              photorealism and storytelling to make ideas unforgettable.
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{ marginBlockStart: { xs: '10px', lg: '15px' } }}
            >
              What we offer
            </Typography>
            <Box component="ul" sx={{ marginBlockStart: { xs: '10px', lg: '15px' } }}>
              {(mediaMdSizeFrom900To1100 ? offerDataLists.slice(0, 4) : offerDataLists).map(
                (item) => (
                  <Box component="li" sx={{ marginBlockEnd: '5px' }} key={uuidv4()}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ),
              )}
            </Box>
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
                playsInline
              >
                <source src="/videos/watch.webm" type="video/webm" />
              </video>
            </Box>
          </Box>
          {/* Third */}
          <Box
            sx={{ gridRow: '2 / span 2', gridColumn: '1', display: { xs: 'none', md: 'block' } }}
          >
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
                playsInline
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
                playsInline
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
                playsInline
              >
                <source src="/videos/cosmix-landscape.webm" type="video/webm" />
              </video>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
