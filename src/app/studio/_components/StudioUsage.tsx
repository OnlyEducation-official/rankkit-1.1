import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function StudioUsage() {
  const guidelines = [
    {
      title: 'Respect the Space',
      description: 'Keep the studio clean and organized. Return all equipment to designated areas.',
      icon: '🏢',
    },
    {
      title: 'Equipment Care',
      description: 'Handle all equipment with care. Report any issues immediately to studio staff.',
      icon: '📷',
    },
    {
      title: 'Time Management',
      description:
        'Arrive on time and be prepared. Setup and breakdown time is included in your booking.',
      icon: '⏰',
    },
    {
      title: 'Safety First',
      description: 'Follow safety protocols. Inform staff of any accidents or hazards immediately.',
      icon: '⚠️',
    },
  ];

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
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '16px',
              color: '#0c0c70',
            }}
          >
            Studio Usage Guidelines
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Guidelines for making the most of your studio experience
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: '24px',
          }}
        >
          {guidelines.map((guideline, index) => (
            <MotionCard
              key={uuidv4()}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              sx={{
                height: '100%',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
              }}
            >
              <CardContent
                sx={{
                  padding: '32px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '3rem',
                    marginBottom: '16px',
                  }}
                >
                  {guideline.icon}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: '#0c0c70',
                  }}
                >
                  {guideline.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    lineHeight: 1.5,
                    flexGrow: 1,
                  }}
                >
                  {guideline.description}
                </Typography>
              </CardContent>
            </MotionCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default StudioUsage;
