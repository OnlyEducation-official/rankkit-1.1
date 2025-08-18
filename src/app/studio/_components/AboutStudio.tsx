import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

function AboutStudio() {
  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: '60px 24px',
          md: '80px 24px',
        },
        backgroundColor: 'white',
        position: 'relative',
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
        {/* Left Content */}
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
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '32px',
              color: '#0c0c70',
              lineHeight: 1.2,
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            ABOUT OUR STUDIO
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              marginBottom: '48px',
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: '#334155',
                fontWeight: 500,
                marginBottom: '24px',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              RankKit Studio is a fully equipped creative space designed for photographers,
              filmmakers, brands, and content creators.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#334155',
                fontWeight: 500,
                marginBottom: '24px',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              With dedicated zones, premium equipment, modular setups and custom wall backdrops,
              every shoot becomes effortless and impactful.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#334155',
                fontWeight: 500,
                marginBottom: '24px',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              From high-end lighting to custom wall backdrops, every detail has been curated to help
              you capture your vision exactly the way you imagine it.
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              marginBottom: '32px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                marginBottom: '24px',
                color: '#0c0c70',
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              What Makes Us Special
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: {
                  xs: 'center',
                  md: 'flex-start',
                },
              }}
            >
              {[
                '+950 Total Sq. Ft. of pillarless open space',
                '+8 Creative wall setups including movable walls',
                '+3 Roll-down backdrops & a green screen zone',
                '+1 Private vanity room with dressing & make-up facilities',
              ].map((feature) => (
                <Box
                  key={uuidv4()}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: {
                      xs: 'center',
                      md: 'left',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#ec2a33',
                      borderRadius: '50%',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#334155',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>

          <Box
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            <MotionButton
              variant="contained"
              size="large"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                padding: '16px 32px',
                backgroundColor: '#0c0c70',
                boxShadow: '0 4px 16px rgba(12, 12, 112, 0.2)',
                '&:hover': {
                  backgroundColor: '#090960',
                },
              }}
            >
              Explore the Space
            </MotionButton>
          </Box>
        </MotionBox>

        {/* Right Content - Studio Image */}
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{
            position: 'relative',
            height: {
              xs: '300px',
              md: '500px',
            },
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
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
              background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#64748b',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Studio Interior
              <br />
              Professional Setup
            </Typography>
          </Box>

          {/* Decorative Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '60px',
              height: '60px',
              backgroundColor: '#ec2a33',
              borderRadius: '8px',
              opacity: 0.1,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              width: '80px',
              height: '40px',
              backgroundColor: '#0c0c70',
              borderRadius: '8px',
              opacity: 0.1,
            }}
          />
        </MotionBox>
      </Box>
    </Box>
  );
}

export default AboutStudio;
