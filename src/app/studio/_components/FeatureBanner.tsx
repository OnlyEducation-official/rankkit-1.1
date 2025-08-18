import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function FeatureBanner() {
  return (
    <Box
      component="section"
      sx={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #0c0c70 0%, #1a1a8a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              marginBottom: '24px',
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            <Box component="span" sx={{ color: 'error.main' }}>
              Capturing
            </Box>{' '}
            the Beauty
            <br />
            of Your Journey
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '48px',
              maxWidth: '800px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}
          >
            Every frame tells your story—with premium lighting, versatile backdrops, and a creative
            environment.
          </Typography>

          <MotionButton
            variant="contained"
            size="large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              padding: '18px 36px',
              backgroundColor: '#ec2a33',
              fontSize: '1.125rem',
              fontWeight: 600,
              boxShadow: '0 6px 20px rgba(236, 42, 51, 0.3)',
              '&:hover': {
                backgroundColor: '#d12030',
              },
            }}
          >
            View Sample Sets
          </MotionButton>
        </MotionBox>

        {/* Visual Elements */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: '32px',
          }}
        >
          {[
            { title: 'Premium Lighting', icon: '💡' },
            { title: 'Versatile Backdrops', icon: '🎭' },
            { title: 'Creative Environment', icon: '🎨' },
            { title: 'Professional Results', icon: '⭐' },
          ].map((item, index) => (
            <MotionBox
              key={uuidv4()}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              sx={{
                padding: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '2.5rem',
                  marginBottom: '12px',
                }}
              >
                {item.icon}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  margin: 0,
                }}
              >
                {item.title}
              </Typography>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}

export default FeatureBanner;
