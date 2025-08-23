import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import paperDropWalls from '@/assets/images/services-logo/paperDrop.png';

const MotionBox = motion(Box);

function PaperDropWalls() {
  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: '60px 24px',
          md: '80px 24px',
        },
        backgroundColor: '#f8fafc',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
          },
          gap: {
            xs: '48px',
            md: '64px',
          },
          alignItems: 'center',

          background: 'transparent',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            height: {
              xs: '300px',
              md: '400px',
            },
            backgroundColor: 'transparent',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            order: {
              xs: 1,
              md: 2,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              aspectRatio: '0.84 / 1',
            }}
          >
            <Image
              src={paperDropWalls}
              alt="Studio Interior"
              style={{
                height: '100%',
                aspectRatio: '0.84 / 1',
                width: '100%',
                borderRadius: '16px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            order: {
              xs: 2,
              md: 2,
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '24px',
              color: '#0c0c70',
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            Paper Drop & Moveable Walls
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#334155',
              marginBottom: '32px',
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            Clean, seamless paper backdrops in multiple colours, plus three full-size moveable walls
            for fast set changes and creative freedom.
          </Typography>
          <Box
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: '16px 32px',
                backgroundColor: '#0c0c70',
                '&:hover': {
                  backgroundColor: '#090960',
                },
              }}
            >
              Check Backdrop Colours
            </Button>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}

export default PaperDropWalls;
