import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

function LocationContact() {
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
            Visit Our Studio
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
            Located in the heart of Navi Mumbai with easy accessibility
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: {
              xs: '32px',
              md: '48px',
            },
          }}
        >
          {/* Contact Information */}
          <MotionCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
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
                }}
              >
                Contact Information
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      marginBottom: '4px',
                      color: '#334155',
                    }}
                  >
                    Address
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.6,
                    }}
                  >
                    RankKit Studio
                    <br />
                    Navi Mumbai, Maharashtra
                    <br />
                    India - 400703
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      marginBottom: '4px',
                      color: '#334155',
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                    }}
                  >
                    +91 XXXXX XXXXX
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      marginBottom: '4px',
                      color: '#334155',
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                    }}
                  >
                    hello@rankitstudio.com
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      marginBottom: '4px',
                      color: '#334155',
                    }}
                  >
                    Hours
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                    }}
                  >
                    Mon-Sun: 9:00 AM - 9:00 PM
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  marginTop: '24px',
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#0c0c70',
                    '&:hover': {
                      backgroundColor: '#090960',
                    },
                  }}
                >
                  Call Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#0c0c70',
                    color: '#0c0c70',
                    '&:hover': {
                      borderColor: '#090960',
                      backgroundColor: 'rgba(12, 12, 112, 0.04)',
                    },
                  }}
                >
                  Get Directions
                </Button>
              </Box>
            </CardContent>
          </MotionCard>

          {/* Map Placeholder */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              height: {
                xs: '300px',
                md: '100%',
              },
              minHeight: '400px',
              backgroundColor: '#f1f5f9',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e2e8f0',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#64748b',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                📍
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  fontWeight: 600,
                }}
              >
                Interactive Map
                <br />
                Coming Soon
              </Typography>
            </Box>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}

export default LocationContact;
