'use client';

import theme from '@/theme/theme';
import { Box } from '@mui/material';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

interface LogoSliderProps {
  logos: { src: string; alt: string }[];
  speed?: number; // animation duration
  height?: number; // logo height
  gap?: number; // spacing between logos
}

export default function LogoSlider({ logos, speed = 25, height = 80, gap = 48 }: LogoSliderProps) {
  const animationDuration = `${speed}s`;
  // const id = useId();
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        py: { xs: 2, md: 4 },
        // background: '#fff',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
        position: 'relative',
        '&:before, &:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          width: '80px', // fade width
          height: '100%',
          pointerEvents: 'none',
          zIndex: 5,
        },
        [theme.breakpoints.up('sm')]: {
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: 80,
            height: '100%',
            background: 'linear-gradient(to right, rgba(243, 242, 242, 1), rgba(182, 0, 0, 0))',
            zIndex: 2,
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: 80,
            height: '100%',
            background: 'linear-gradient(to left, rgba(243, 242, 242, 1), rgba(255,255,255,0))',
            zIndex: 2,
          },
        },

        // Remove on XS
        [theme.breakpoints.down('sm')]: {
          '&:before': { display: 'none' },
          '&:after': { display: 'none' },
        },
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
            key={uuidv4()}
            sx={{
              mx: `${gap / 16}rem`,
              height,
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.3s ease',
            }}
            className="logo"
          >
            <Box
              sx={{
                position: 'relative',
                // width: '100%',
                height: '100%',
                aspectRatio: '18/17',
                // aspectRatio: '12/10',
                objectFit: 'contain',
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                // width={height * 2}
                // height={height}
                fill
                // width={100}
                // height={100}
                // style={{
                //   // height,
                //   aspectRatio: '16/9',
                //   // aspectRatio: '4/2',
                //   // width: 'auto',
                //   objectFit: 'contain',
                // }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
