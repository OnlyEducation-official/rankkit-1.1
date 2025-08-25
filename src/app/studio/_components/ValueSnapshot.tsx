import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function ValueSnapshot() {
  const stats = [
    {
      title: '+1200 sq.ft pillarless open space',
      description: 'Spacious environment for any shoot setup',
      icon: '📐',
    },
    {
      title: '+8 creative wall setups incl. movable walls',
      description: 'Versatile backdrops for every creative vision',
      icon: '🎨',
    },
    {
      title: '+8 roll-down backdrops + green screen',
      description: 'Professional seamless backgrounds',
      icon: '🎬',
    },
    {
      title: 'Private vanity room (make-up & dressing)',
      description: 'Dedicated space for talent preparation',
      icon: '💄',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        padding: '80px 24px',
        backgroundColor: '#f8fafc',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              marginBottom: '16px',
              color: '#0c0c70',
            }}
          >
            Why Choose RankKit Studio
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Everything you need for professional content creation in one location
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
            gap: '32px',
          }}
        >
          {stats.map((stat, index) => (
            <MotionCard
              key={uuidv4()}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              sx={{
                padding: { xs: 2, sm: 2.5, lg: '32px' },
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderRadius: '16px',
              }}
            >
              <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '3rem',
                    marginBottom: '16px',
                  }}
                >
                  {stat.icon}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: '#0c0c70',
                    lineHeight: 1.3,
                  }}
                >
                  {stat.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    lineHeight: 1.5,
                  }}
                >
                  {stat.description}
                </Typography>
              </CardContent>
            </MotionCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ValueSnapshot;
