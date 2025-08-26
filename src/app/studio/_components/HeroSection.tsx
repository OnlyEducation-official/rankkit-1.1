/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-scroll';
import { getWhatsAppInfo } from '@/components/whatsappInfo';
import Panorama from '@/app/_components/MyPanoramaComponent';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

function HeroSection() {
  const whatsappInfo = getWhatsAppInfo({ btnName: 'Book the studio' });
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0c0c70 0%, #1a1a8a 50%, #2a2aa0 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingBlockEnd: '30px',
        paddingBlockStart: '100px',
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
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #ec2a33 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ec2a33 2px, transparent 2px)',
          backgroundSize: '50px 50px',
        }}
      />

      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
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
          width: '100%',
        }}
      >
        {/* Left Content */}
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            color: 'white',
            zIndex: 2,
            order: {
              xs: 2,
              md: 1,
            },
          }}
        >
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            sx={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
              background: 'linear-gradient(45deg, #ffffff, #ec2a33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            Creative Studio
          </MotionTypography>

          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            sx={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              fontWeight: 600,
              marginBottom: '32px',
              color: '#ffffff',
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            The Biggest Studio in Navi Mumbai
          </MotionTypography>

          <MotionTypography
            variant="body1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            sx={{
              fontSize: '1.125rem',
              marginBottom: '48px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.6,
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            Fully equipped space for photographers, filmmakers, brands, and creators.
          </MotionTypography>

          {/* Quick Badges */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '48px',
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
          >
            {['+1200 sq.ft', '+8 wall setups', '+8 paper backdrops', 'Vanity room', 'Pantry'].map(
              (badge) => (
                <Chip
                  key={uuidv4()}
                  label={badge}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '& .MuiChip-label': {
                      color: 'white',
                    },
                  }}
                />
              ),
            )}
          </MotionBox>

          {/* CTA Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            sx={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
          >
            <Button
              LinkComponent="a"
              href={`https://wa.me/${whatsappInfo.number}?text=${encodeURIComponent(whatsappInfo.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{
                padding: '16px 32px',
                backgroundColor: '#ec2a33',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 16px rgba(236, 42, 51, 0.3)',
                '&:hover': {
                  backgroundColor: '#d12030',
                },
              }}
            >
              Book the Studio
            </Button>
            <Link to="facilities" smooth={true} duration={500} offset={-40}>
              <Button
                type="button"
                variant="outlined"
                size="large"
                sx={{
                  padding: '16px 32px',
                  color: 'white',
                  borderColor: 'white',
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                See Facilities
              </Button>
            </Link>
          </MotionBox>
        </MotionBox>

        {/* Right Content - Studio Image */}
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          sx={{
            position: 'relative',
            height: {
              xs: '400px',
              md: '600px',
            },
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
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
              background: 'linear-gradient(45deg, #ec2a33, #0c0c70)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Panorama
              src="/videos/studioOverview.png"
              caption="Rankkit Studio +1200sqft"
              height="100%"
              rounded={0}
              navbar={['move', 'fullscreen', 'caption']}
              lockZoom
            />
          </Box>
        </MotionBox>
      </Box>

      {/* Scroll Indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        sx={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          textAlign: 'center',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            width: '24px',
            height: '40px',
            border: '2px solid white',
            borderRadius: '12px',
            margin: '0 auto 8px',
            position: 'relative',
          }}
        >
          <MotionBox
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            sx={{
              width: '4px',
              height: '8px',
              backgroundColor: 'white',
              borderRadius: '2px',
              position: 'absolute',
              left: '50%',
              top: '8px',
              transform: 'translateX(-50%)',
            }}
          />
        </Box>
        <Typography variant="body2" sx={{ margin: 0, opacity: 0.8 }}>
          Scroll to explore
        </Typography>
      </MotionBox>
    </Box>
  );
}

export default HeroSection;
