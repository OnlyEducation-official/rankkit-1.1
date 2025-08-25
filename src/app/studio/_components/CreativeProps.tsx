import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import props from '@/assets/images/services-logo/props.png';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion(Box);

const listsData = [
  'Curated collection of décor, plants, figurines, and unique items.',
  'Adds depth, character, and storytelling to every shoot.',
  'Ready-to-use props that save setup time.',
  'Perfect for brand shoots, lifestyle content, and product displays.',
  'Mix and match for endless creative combinations.',
];

function CreativeProps() {
  return (
    <Box
      component="section"
      id="props"
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
            Creative Props & Set Elements
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
            A curated library of props—vases, décor pieces, figurines, plants, and thematic items—to
            add character and depth to every frame.
          </Typography>
          <ul>
            {listsData.map((list) => (
              <Typography
                component="li"
                variant="body1"
                key={uuidv4()}
                sx={{ marginBlockEnd: '2px' }}
              >
                {list}
              </Typography>
            ))}
          </ul>
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
              // aspectRatio: '0.84 / 1',
            }}
          >
            <Image
              src={props}
              alt="Studio Interior"
              style={{
                height: '100%',
                // aspectRatio: '0.84 / 1',
                width: '100%',
                borderRadius: '16px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}

export default CreativeProps;
