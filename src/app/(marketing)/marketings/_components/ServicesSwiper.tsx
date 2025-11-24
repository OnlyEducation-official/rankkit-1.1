/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import type { StaticImageData } from 'next/image';
// uuid
import { v4 as uuidv4 } from 'uuid';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Grid, Box, Typography } from '@mui/material';
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

function ServicesSwiper({ services }: ServicesSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      {...swiperConfig}
      style={{
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
        borderRadius: 10,
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
                      objectFit: 'cover',
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
                    maxWidth: 420,
                  }}
                >
                  {s.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ServicesSwiper;
