'use client';

import { useGSAP } from '@gsap/react';
import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { gsap } from 'gsap';

export default function SampleSection() {
  const container = useRef(null);
  const circle = useRef(null);

  useGSAP(
    () => {
      // use selectors...
      gsap.to('.box', { rotation: '+=360', duration: 5 });

      // or refs...
      gsap.to(circle.current, { rotation: '-=360', duration: 3 });
    },
    { scope: container },
  ); //
  return (
    <Box
      ref={container}
      sx={{
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        ref={circle}
        sx={{
          //   position: 'absolute',
          //   top: 50,
          //   right: 50,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(238, 174, 202, 1) 45%, rgba(148, 187, 233, 1) 100%)',
          width: '100px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        ref
      </Box>
    </Box>
  );
}
