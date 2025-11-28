/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import type { StaticImageData } from 'next/image';
// uuid
import { Link } from 'react-scroll';

import { ArrowRight } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Grid, Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Service = {
  title: string;
  description: string;
  image: StaticImageData | string;
};

interface ServicesSwiperProps {
  services: Service[];
}

const swiperConfig: SwiperOptions = {
  spaceBetween: 24,
  slidesPerView: 1,
  // pagination: { clickable: true },
  // navigation: {
  //   enabled: true,
  // },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  // breakpoints: {
  //   0: {
  //     navigation: false, // hide on mobile
  //   },
  //   768: {
  //     navigation: true, // show on desktop
  //   },
  // },
};
const MotionBox = motion(Box);
function ServicesSwiper({ services }: ServicesSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      {...swiperConfig}
      style={{
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
        borderRadius: 25,
      }}
    >
      {services.map((s) => (
        <SwiperSlide key={uuidv4()}>
          <Grid key={uuidv4()} size={{ xs: 12, md: 12 }}>
            <Grid
              container
              spacing={0}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                overflow: 'hidden',
                width: 'auto',
                height: 'auto',
              }}
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  order: { xs: 0, md: 1 },
                  padding: 2.5,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    borderRadius: 2,
                    height: '100%',
                  }}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: 2,
                    }}
                  />
                </Box>
              </Grid>

              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  order: { xs: 1, md: 0 },
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                {/* Optional small label over title */}
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                >
                  Core Service
                </Typography>

                {/* Title */}
                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.35rem', md: '1.6rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: 'text.primary',
                  }}
                >
                  {s.title}
                </Typography>

                {/* Divider accent */}
                <Box
                  sx={{
                    width: 40,
                    height: 3,
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, #2563EB 0%, #22C55E 100%)',
                  }}
                />

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    // maxWidth: 420,
                  }}
                >
                  {s.description}
                </Typography>
                <MotionBox
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ display: { xs: 'none', md: 'block' } }}
                >
                  <Link
                    to="servicesSection"
                    smooth
                    duration={500}
                    offset={-10} // adjust if you have fixed navbar
                  >
                    <Button
                      // LinkComponent={Link}
                      // href="/contact-us"
                      // onClick={() => handleConnectClick('consultation')}
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<ArrowRight />}
                      sx={{
                        marginBlockStart: 3,
                        bgcolor: '#0c0c71',
                        '&:hover': { bgcolor: '#0a0a5f' },
                        px: 4,
                        py: 2,
                        borderRadius: '12px',
                        '& .MuiButton-endIcon': {
                          transition: 'transform 0.3s',
                        },
                        '&:hover .MuiButton-endIcon': {
                          transform: 'translateX(4px)',
                        },
                      }}
                      onClick={() => {
                        const el = document.getElementById('servicesSection');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Free Consultation
                    </Button>
                  </Link>
                </MotionBox>
              </Grid>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ServicesSwiper;
