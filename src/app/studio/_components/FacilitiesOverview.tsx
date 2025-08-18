import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion(Box);
const MotionLink = motion(Link);

function FacilitiesOverview() {
  const facilities = [
    {
      title: 'Multiple Setups',
      description: 'Pre-designed & modular walls',
      icon: '🏗️',
      anchor: '#setups',
    },
    {
      title: 'Vanity Room',
      description: 'Make-up/dressing facilities',
      icon: '💄',
      anchor: '#vanity',
    },
    {
      title: 'Props & Set Elements',
      description: 'Curated collection of props',
      icon: '🎭',
      anchor: '#props',
    },
    {
      title: 'Professional Equipment',
      description: '4K cameras & lighting kits',
      icon: '📷',
      anchor: '#equipment',
    },
    {
      title: 'Green Screen & Paper Drops',
      description: 'Seamless backgrounds',
      icon: '🎬',
      anchor: '#backgrounds',
    },
    {
      title: 'Convenience Facilities',
      description: 'Pantry/Washroom facilities',
      icon: '🏢',
      anchor: '#convenience',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        padding: '80px 24px',
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
            Facilities Overview
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
            Everything you need for professional content creation under one roof
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: '24px',
          }}
        >
          {facilities.map((facility, index) => (
            <MotionLink
              key={uuidv4()}
              href={facility.anchor}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              sx={{
                display: 'block',
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #ec2a33, #0c0c70)',
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontSize: '3rem',
                  marginBottom: '16px',
                }}
              >
                {facility.icon}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                  color: '#0c0c70',
                }}
              >
                {facility.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#64748b',
                  lineHeight: 1.5,
                }}
              >
                {facility.description}
              </Typography>

              {/* Hover Arrow */}
              <MotionBox
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '24px',
                  transform: 'translateY(-50%)',
                  fontSize: '1.5rem',
                  color: '#ec2a33',
                }}
              >
                →
              </MotionBox>
            </MotionLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default FacilitiesOverview;
