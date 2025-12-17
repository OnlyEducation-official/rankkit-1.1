'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/material';

const MotionBox = motion(Box);
export default function ScrollProgressSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        height: '400vh',
      }}
    >
      {/* Sticky container */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <MotionBox
          sx={{
            display: 'flex',
            width: '400vw',
            height: '100%',
          }}
          style={{ x }}
        >
          {[1, 2, 3, 4].map((n) => (
            <Box
              key={n}
              sx={{
                width: '100vw',
                height: '100%',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                bgcolor: 'grey.200',
              }}
            >
              Slide {n}
            </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}
