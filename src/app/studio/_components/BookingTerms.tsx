'use client';

import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MotionBox = motion(Box);

function BookingTerms() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const terms = [
    {
      id: 'panel1',
      title: 'Booking & Payment',
      content:
        '100% advance payment required to confirm booking. Payment can be made via bank transfer, UPI, or card. Booking confirmation will be sent within 24 hours of payment.',
    },
    {
      id: 'panel2',
      title: 'Cancellation Policy',
      content:
        'Cancellations made 48 hours prior to shoot date are eligible for 80% refund. Cancellations within 48 hours are non-refundable. Weather-related cancellations are handled case by case.',
    },
    {
      id: 'panel3',
      title: 'Studio Usage',
      content:
        'Studio time includes setup and breakdown. Overtime charges apply beyond booked hours. Props and equipment usage included in rental. External equipment allowed with prior approval.',
    },
    {
      id: 'panel4',
      title: 'Equipment & Damage',
      content:
        'Any damage to studio property will be charged separately. Handle all equipment with care. Studio assistant available for technical support at additional cost.',
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
        backgroundColor: 'white',
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
            Booking Terms & Conditions
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
            Important information for booking our studio space
          </Typography>
        </MotionBox>

        <Box
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {terms.map((term, index) => (
            <MotionBox
              key={term.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              sx={{ marginBottom: '16px' }}
            >
              <Accordion
                expanded={expanded === term.id}
                onChange={handleChange(term.id)}
                sx={{
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '0 0 16px 0',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ChevronDown
                      size={20}
                      style={{
                        color: '#0c0c70',
                        transform: expanded === term.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease-in-out',
                      }}
                    />
                  }
                  sx={{
                    backgroundColor: expanded === term.id ? '#f8fafc' : 'white',
                    minHeight: '64px',
                    '& .MuiAccordionSummary-content': {
                      margin: '16px 0',
                    },
                    '&:hover': {
                      backgroundColor: '#f8fafc',
                    },
                    borderRadius: '8px 8px 0 0',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#0c0c70',
                      fontSize: '1.125rem',
                    }}
                  >
                    {term.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#f8fafc',
                    padding: '24px',
                    borderTop: '1px solid #e2e8f0',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#334155',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                    }}
                  >
                    {term.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionBox>
          ))}
        </Box>

        {/* Additional Information */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            marginTop: '48px',
            padding: '32px',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '48px auto 0',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#0c0c70',
              marginBottom: '16px',
            }}
          >
            Have Questions?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              marginBottom: '24px',
            }}
          >
            Contact us for clarifications on any terms or to discuss custom packages.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Typography
              component="a"
              href="tel:+91XXXXXXXXXX"
              sx={{
                color: '#0c0c70',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              📞 Call Us
            </Typography>
            <Typography
              component="a"
              href="mailto:hello@rankitstudio.com"
              sx={{
                color: '#0c0c70',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              ✉️ Email Us
            </Typography>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}

export default BookingTerms;
