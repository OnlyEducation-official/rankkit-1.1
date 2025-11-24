'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { useId } from 'react';

interface LogoSliderProps {
  logos: { src: string; alt: string }[];
  speed?: number; // animation duration
  height?: number; // logo height
  gap?: number; // spacing between logos
}

export default function LogoSlider({ logos, speed = 25, height = 80, gap = 48 }: LogoSliderProps) {
  const animationDuration = `${speed}s`;
  const id = useId();
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        py: 6,
        // background: '#fff',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
      }}
      className="logo-slider"
    >
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .track {
            display: inline-flex;
            align-items: center;
            animation: scroll linear infinite;
            animation-duration: ${animationDuration};
          }

          .logo:hover {
            transform: scale(1.15);
          }
        `}
      </style>

      {/* 2 Tracks for seamless looping */}
      <Box
        className="track"
        sx={{
          animationPlayState: 'running',
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo) => (
          <Box
            key={id}
            sx={{
              mx: `${gap / 16}rem`,
              height,
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.3s ease',
            }}
            className="logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              // width={height * 2}
              // height={height}
              width={100}
              height={100}
              style={{
                height,
                aspectRatio: '16/9',
                width: 'auto',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
