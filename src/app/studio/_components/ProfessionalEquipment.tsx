import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion(Box);

function ProfessionalEquipment() {
  const equipment = [
    'Godox LED Video Light',
    'Godox Parabolic Softbox',
    'Softbox with Grid',
    'Teleprompter',
    'Nikon DSLR on Tripod',
  ];

  return (
    <Box component="section" id="equipment" sx={{ padding: '80px 24px', backgroundColor: 'white' }}>
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
            Professional-Grade Equipment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto 32px',
            }}
          >
            From 4K cameras and advanced lighting kits to teleprompter setups—we provide everything
            needed for consistent, professional results.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            {equipment.map((item) => (
              <Chip
                key={uuidv4()}
                label={item}
                sx={{
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.875rem',
                  color: '#334155',
                }}
              />
            ))}
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              padding: '16px 32px',
              backgroundColor: '#0c0c70',
              '&:hover': { backgroundColor: '#090960' },
            }}
          >
            Request Full Gear List
          </Button>
        </MotionBox>
      </Box>
    </Box>
  );
}

export default ProfessionalEquipment;
