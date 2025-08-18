import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function GreenScreenZone() {
  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: '60px 24px',
          md: '80px 24px',
        },
        backgroundColor: 'white',
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
        }}
      >
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            order: {
              xs: 2,
              md: 1,
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
            Green Screen Zone
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
            Dedicated chroma area for compositing and effects-driven projects.
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
                backgroundColor: '#22c55e',
                '&:hover': {
                  backgroundColor: '#16a34a',
                },
              }}
            >
              Ask About Chroma Workflows
            </Button>
          </Box>
        </MotionBox>
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
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
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
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Green Screen Area
          </Typography>
        </MotionBox>
      </Box>
    </Box>
  );
}

export default GreenScreenZone;
