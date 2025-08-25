import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { getWhatsAppInfo } from '@/components/whatsappInfo';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const whatsappInfo = getWhatsAppInfo({ btnName: 'Check Availability' });

function Pricing() {
  const rates = [
    { duration: '1 Hour', price: '₹2,500' },
    { duration: '4 Hours', price: '₹9,000' },
    { duration: '6 Hours', price: '₹12,000' },
    { duration: '8 Hours', price: '₹16,000' },
    { duration: '10 Hours', price: '₹18,000' },
    { duration: '12 Hours', price: '₹21,000' },
  ];

  const notes = [
    'Electricity: ₹25 per unit (meter reading before shoot)',
    'Studio Assistant (mandatory): Up to 6 hrs ₹500 | Up to 12 hrs ₹1,000',
    'Advance: 100% advance to confirm booking',
    'Custom Packages: Long-term / volume bookings—contact us',
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
            Pricing
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: '#64748b',
            }}
          >
            Transparent pricing for professional studio rental
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1fr 1fr',
            },
            gap: {
              xs: '32px',
              lg: '48px',
            },
            alignItems: 'start',
          }}
        >
          {/* Studio Rates Card */}
          <MotionCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              order: {
                xs: 1,
                lg: 1,
              },
            }}
          >
            <CardContent sx={{ padding: '32px' }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#0c0c70',
                  textAlign: {
                    xs: 'center',
                    lg: 'left',
                  },
                }}
              >
                Studio Rates
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {rates.map((rate, index) => (
                  <Box
                    key={uuidv4()}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '16px',
                      borderBottom: index < rates.length - 1 ? '1px solid #e2e8f0' : 'none',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#334155',
                        fontSize: '1rem',
                        fontWeight: 500,
                      }}
                    >
                      {rate.duration}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#0c0c70',
                      }}
                    >
                      {rate.price}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Special Offer Badge */}
              <Box
                sx={{
                  marginTop: '24px',
                  padding: '16px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '12px',
                  border: '1px solid #fbbf24',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#92400e',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: '0.875rem',
                  }}
                >
                  💡 Book 8+ hours and get priority scheduling
                </Typography>
              </Box>
            </CardContent>
          </MotionCard>

          {/* Important Notes Card */}
          <MotionCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              order: {
                xs: 2,
                lg: 2,
              },
            }}
          >
            <CardContent sx={{ padding: '32px' }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#0c0c70',
                  textAlign: {
                    xs: 'center',
                    lg: 'left',
                  },
                }}
              >
                Important Notes
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {notes.map((note) => (
                  <Box
                    key={uuidv4()}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <Box
                      sx={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#ec2a33',
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#334155',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                      }}
                    >
                      {note}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Contact Information */}
              <Box
                sx={{
                  marginTop: '24px',
                  padding: '16px',
                  backgroundColor: '#eff6ff',
                  borderRadius: '12px',
                  border: '1px solid #3b82f6',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1e40af',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    marginBottom: '8px',
                  }}
                >
                  📞 Need a Custom Quote?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1e40af',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                  }}
                >
                  Contact us for volume discounts and long-term bookings
                </Typography>
              </Box>
            </CardContent>
          </MotionCard>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: 'center',
            marginTop: {
              xs: '40px',
              md: '48px',
            },
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                marginBottom: '24px',
                fontSize: '1rem',
              }}
            >
              Ready to book your creative session?
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
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
                  backgroundColor: '#0c0c70',
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#090960',
                  },
                }}
              >
                Check Availability
              </Button>
              <Button
                LinkComponent={Link}
                href="/contact-us"
                variant="outlined"
                size="large"
                sx={{
                  padding: '16px 32px',
                  borderColor: '#0c0c70',
                  color: '#0c0c70',
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#090960',
                    backgroundColor: 'rgba(12, 12, 112, 0.04)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}

export default Pricing;
