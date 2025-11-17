'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function StickyFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionBox
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(12, 12, 112, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '16px 24px',
        zIndex: 1000,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            margin: 0,
            color: 'white',
            fontWeight: 500,
          }}
        >
          Ready to shoot at the biggest studio in Navi Mumbai?
        </Typography>

        <MotionButton
          variant="contained"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            padding: '12px 24px',
            backgroundColor: '#ec2a33',
            fontWeight: 600,
            boxShadow: '0 4px 16px rgba(236, 42, 51, 0.3)',
            flexShrink: 0,
            '&:hover': {
              backgroundColor: '#d12030',
            },
          }}
        >
          Book Your Slot
        </MotionButton>
      </Box>
    </MotionBox>
  );
}

export default StickyFooter;
