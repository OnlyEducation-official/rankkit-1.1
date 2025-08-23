'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';
// gallery 1 to 8
import gallery1 from '@/assets/images/gallery/gallery1.png';
import gallery2 from '@/assets/images/gallery/gallery2.png';
import gallery3 from '@/assets/images/gallery/gallery3.png';
import gallery4 from '@/assets/images/gallery/gallery4.png';
import gallery5 from '@/assets/images/gallery/gallery5.png';
import gallery6 from '@/assets/images/gallery/gallery6.png';
import gallery7 from '@/assets/images/gallery/gallery7.png';
import gallery8 from '@/assets/images/gallery/gallery8.png';

const MotionBox = motion(Box);

const imgData = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

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
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
            mb: 6,
          }}
        >
          {imgData.map((item, index) => (
            <MotionBox
              key={uuidv4()}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              sx={{
                position: 'relative', // needed for Image fill
                overflow: 'hidden',
                borderRadius: 2,
                bgcolor: '#f1f5f9',
                cursor: 'pointer',
                aspectRatio: '1 / 1.29', // width controls height here
              }}
            >
              <Image
                alt="studio_gallery"
                src={item}
                fill // <-- key: fill the container
                // sizes="(max-width:900px) 50vw, (max-width:1200px) 25vw, 20vw"
                style={{
                  objectFit: 'cover', // cover without distortion
                  objectPosition: 'center',
                  display: 'block',
                }}
                priority={false}
              />
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
