import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import photoShootMediaProdService from '@/assets/images/services-logo/photoShootMediaProdService.png';

export default function CustomGridMedia() {
  return (
    <Container maxWidth="lg" sx={{ marginBlock: 10 }}>
      <Grid container spacing={3} sx={{ height: { md: '80vh' } }}>
        <Grid size={{ xs: 12, md: 5 }} sx={{ height: '100%' }}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              borderRadius: 3,
              position: 'relative',
            }}
          >
            <video
              loop
              autoPlay
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // fits box without overflowing
                borderRadius: 'inherit',
                display: 'block',
              }}
            >
              <source src="/videos/poster.webm" type="video/webm" />
            </video>
          </Box>
        </Grid>
        <Grid
          container
          size={{ xs: 12, md: 7 }}
          sx={{
            height: 1,
            flexDirection: 'column',
          }}
        >
          <Box sx={{ flex: 0.5 }}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                borderRadius: 3,
                position: 'relative',
              }}
            >
              <video
                loop
                autoPlay
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // fits box without overflowing
                  borderRadius: 'inherit',
                  display: 'block',
                }}
              >
                <source src="/videos/itcEventCover.webm" type="video/webm" />
              </video>
            </Box>
          </Box>
          <Grid container sx={{ flex: 0.5 }} spacing={3}>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: 3,
                  position: 'relative',
                }}
              >
                <video
                  loop
                  autoPlay
                  muted
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // fits box without overflowing
                    borderRadius: 'inherit',
                    display: 'block',
                  }}
                >
                  <source src="/videos/watch.webm" type="video/webm" />
                </video>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Image
                src={photoShootMediaProdService}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: 3,
                  position: 'relative',
                }}
              >
                <video
                  loop
                  autoPlay
                  muted
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // fits box without overflowing
                    borderRadius: 'inherit',
                    display: 'block',
                  }}
                >
                  <source src="/videos/emlishSaloon.webm" type="video/webm" />
                </video>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
