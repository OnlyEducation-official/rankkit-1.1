'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const MotionBox = motion(Box);

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Fashion', 'Product', 'Video', 'Podcast'];

  return (
    <Box component="section" sx={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '16px',
              color: '#0c0c70',
            }}
          >
            Gallery
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '32px' }}
          >
            See our studio in action across different types of shoots
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '48px',
              flexWrap: 'wrap',
            }}
          >
            {filters.map((filter) => (
              <Chip
                key={filter}
                label={filter}
                onClick={() => setActiveFilter(filter)}
                sx={{
                  padding: '8px 24px',
                  backgroundColor: activeFilter === filter ? '#0c0c70' : 'transparent',
                  color: activeFilter === filter ? 'white' : '#64748b',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: activeFilter === filter ? '#0c0c70' : '#f1f5f9',
                  },
                }}
              />
            ))}
          </Box>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <MotionBox
              key={uuidv4()}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: item * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              sx={{
                height: '300px',
                backgroundColor: '#f1f5f9',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              <Typography variant="body1" sx={{ color: '#64748b', fontWeight: 600 }}>
                Studio Shot {item}
              </Typography>
            </MotionBox>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            LinkComponent={Link}
            href="/contact-us"
            variant="contained"
            size="large"
            sx={{
              padding: '16px 32px',
              backgroundColor: '#ec2a33',
              '&:hover': { backgroundColor: '#d12030' },
            }}
          >
            Book Your Slot
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Gallery;
