'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Box, Typography, Avatar, Rating, IconButton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const obj = [
  {
    desc: 'I was struggling to find the right direction for my MBA Consectetur elit ex reprehenderit enim excepteur mollit. Commodo voluptate exercitation veniam esse voluptate excepteur. Duis veniam adipisicing dolore pariatur. Ut do consequat ut laborum Lorem do laborum tempor non sint tempor et. Sunt veniam proident excepteur excepteur eiusmod enim amet. Ex veniam id nulla sit elit dolor fugiat aliquip. Laborum proident esse enim qui eu dolor. applications. Only Education helped me excepteur  eiusmod enim amet. Ex veniam id nulla sit elit dolor fugiat aliquip. Laborum proident esse enim qui eu dolor. applications. Only Education helped me excepteur  eiusmod enim amet. Ex veniam id nulla sit elit dolor fugiat aliquip. Laborum proident esse enim qui eu dolor. applications. Only Education helped me excepteur eiusmod enim amet. Ex veniam id nulla sit elit dolor fugiat aliquip. Laborum proident esse enim qui eu dolor. applications. Only Education helped me eiusmod enim amet. Ex veniam id nulla sit elit dolor fugiat aliquip. Laborum proident esse enim qui eu dolor. applications. Only Education helped me discover my strengths and craft a compelling story.',
    personName: 'Saggam Praveena',
    stars: 4,
  },
  {
    desc: 'Only Education provided clear guidance and a structured approach that made my application process smooth.',
    personName: 'Rahul Mehta',
    stars: 5,
  },
  {
    desc: 'From shortlisting universities to refining my SOP, the team supported me at every step.',
    personName: 'Ananya Sharma',
    stars: 5,
  },
  {
    desc: 'The personalized mentorship and practical advice were extremely valuable.',
    personName: 'Vikram Singh',
    stars: 4,
  },
  {
    desc: 'What stood out most was their attention to detail and structured guidance.',
    personName: 'Neha Kulkarni',
    stars: 5,
  },
  {
    desc: 'Only Education transformed an overwhelming process into a confident experience.',
    personName: 'Amit Verma',
    stars: 4,
  },
];

export default function SwiperComponent() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box sx={{ position: 'relative', py: 6 }}>
      {/* Prev Button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 12, md: 16 },
          left: 0,
          right: 0,
          zIndex: 10,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          px: { xs: 2, md: 4 },
        }}
      >
        <IconButton ref={prevRef} sx={{ bgcolor: '#fff', boxShadow: 2 }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <Box
          className="custom-swiper-pagination"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1, md: 1.5 },

            '& .swiper-pagination-bullet': {
              width: { xs: 6, md: 8 },
              height: { xs: 6, md: 8 },
              borderRadius: '50%',
              backgroundColor: 'grey.400',
              opacity: 1,
              transition: 'all 0.3s ease',
            },

            '& .swiper-pagination-bullet-active': {
              width: { xs: 18, md: 24 },
              borderRadius: 8,
              backgroundColor: 'primary.main',
            },
          }}
        />

        <IconButton ref={nextRef} sx={{ bgcolor: '#fff', boxShadow: 2 }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop
        spaceBetween={24}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          if (prevRef.current && nextRef.current && typeof swiper.params.navigation !== 'boolean') {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {obj.map((item, index) => (
          <SwiperSlide key={uuidv4()}>
            <Box
              sx={{
                height: { xs: 260, md: 250 }, // ✅ SAME HEIGHT FOR ALL
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  display: '-webkit-box',
                  WebkitLineClamp: { xs: 4, md: 5 },
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  fontWeight: 700,
                }}
              >
                {item.desc}
              </Typography>
              {/* <Box sx={{ flexGrow: 1, flexShrink: 1 }} /> */}

              {/* Footer */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mt: 'auto', // ✅ KEY FIX
                }}
              >
                <Avatar
                  sx={{
                    aspectRatio: '1/1',
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: 28,
                    pl: 0.2,
                  }}
                >
                  {item.personName.charAt(0)}
                </Avatar>

                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {item.personName}
                  </Typography>
                  <Rating size="small" value={item.stars} readOnly />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
