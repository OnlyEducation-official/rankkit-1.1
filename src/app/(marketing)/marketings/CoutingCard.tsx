'use client';

import React, { useEffect, useState } from 'react';
import { useMotionValue, animate } from 'framer-motion';
import { Grid, Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
// Path to the trophy image (provided by you)
export interface CoutingCardProps {
  title: string;
  endCount: number;
  image: StaticImageData;
  sign: string;
}
export default function CoutingCard({ endCount, image, title, sign }: CoutingCardProps) {
  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(endCount); // sync prop to internal state
  }, [endCount]); //

  useEffect(() => {
    const controls = animate(motionValue, 150, {
      duration: 2.8,
      ease: [0.16, 1, 0.3, 1], // smoother cubic-bezier ease
    });

    const unsubscribe = motionValue.on('change', (v) => {
      setCount(Math.floor(v));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionValue]);

  return (
    // <Box
    //   alignItems="center"
    //   justifyContent="center"
    //   sx={{
    //     // display: { xs: 'block', sm: 'flex' },
    //     display: 'flex',
    //     flexDirection: 'column',
    //     width: '100%',
    //     height: '100%',
    //     maxWidth: { sm: 200, md: 240, lg: 320 },
    //     minHeight: { xs: 80, sm: 130, md: 200 },
    //     bgcolor: 'white',
    //     borderRadius: 2,
    //     paddingInline: { xs: 0, sm: 3 },
    //     paddingBlock: { xs: 0, sm: 3 },
    //     // boxShadow: 1,
    //     mx: 'auto',
    //   }}
    // >
    //   {/* <Box sx={{ position: 'relative', width: 40, height: 40, mb: { xs: 2, sm: 3 } }}>
    //     <Image src={image.src} alt="trophy" fill style={{ objectFit: 'cover' }} />
    //   </Box> */}
    //   <Typography
    //     variant="inherit"
    //     fontWeight={600}
    //     lineHeight={1}
    //     mb={1}
    //     sx={{
    //       fontSize: {
    //         xs: 'clamp(1.4rem, 4vw, 2rem)', // mobile
    //         sm: 'clamp(1.8rem, 4vw, 2.6rem)', // tablet
    //         md: 'clamp(2.2rem, 4vw, 3rem)', // desktop
    //       },
    //     }}
    //   >
    //     {count}
    //     <Box component="span" sx={{ ml: 0.5 }}>
    //       {sign}
    //     </Box>
    //   </Typography>

    //   <Typography
    //     variant="inherit"
    //     color="text.secondary"
    //     sx={{
    //       textAlign: 'center',
    //       lineHeight: { xs: 1.26, sm: 1 },
    //       fontSize: {
    //         xs: 'clamp(0.85rem, 1.5vw, 1.2rem)',
    //         sm: 'clamp(1.1rem, 2.4vw, 1.4rem)',
    //         md: 'clamp(1.3rem, 2.8vw, 1.6rem)',
    //       },
    //     }}
    //     fontWeight={600}
    //   >
    //     {title}
    //   </Typography>
    // </Box>
    <Box
      alignItems="center"
      justifyContent="center"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        maxWidth: { sm: 200, md: 240, lg: 320 },
        minHeight: { xs: 80, sm: 130, md: 200 },
        bgcolor: 'white',
        borderRadius: 2,
        paddingInline: { xs: 0, sm: 3 },
        paddingBlock: { xs: 0, sm: 3 },
        mx: 'auto',
      }}
    >
      {/* FIX: This wrapper ensures title baseline alignment */}
      <Box
        sx={{
          height: { xs: 50, sm: 60, md: 70 },
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        <Typography
          variant="inherit"
          fontWeight={600}
          lineHeight={1}
          sx={{
            fontSize: {
              xs: 'clamp(2.1rem, 6vw, 2rem)',
              sm: 'clamp(1.8rem, 4vw, 2.6rem)',
              md: 'clamp(2.2rem, 4vw, 3rem)',
            },
          }}
        >
          <Box component="span" sx={{ color: '#0c0b71' /* change color */ }}>
            {count}
          </Box>
          <Box component="span" sx={{ ml: 0.5 }}>
            {sign}
          </Box>
        </Typography>
      </Box>

      <Typography
        variant="inherit"
        color="text.secondary"
        sx={{
          textAlign: 'center',
          lineHeight: { xs: 1.26, sm: 1 },
          fontSize: {
            xs: 'clamp(0.85rem, 1.5vw, 1.2rem)',
            sm: 'clamp(1.1rem, 2.4vw, 1.4rem)',
            md: 'clamp(1.3rem, 2.8vw, 1.3rem)',
          },
        }}
        fontWeight={600}
      >
        {title}
      </Typography>
    </Box>
  );
}
