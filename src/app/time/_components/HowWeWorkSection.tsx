'use client';

import { Box, Chip, Typography } from '@mui/material';
import { useScroll } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
/* -------------------------------------------------- */
/* Timeline Box                                       */
/* -------------------------------------------------- */

type TimelineStep = {
  id: number;
  title: string;
  description: string;
  left: string; // horizontal anchor
};
const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 1,
    title: 'Research',
    description:
      'We take the time to understand your goals, your industry, and your product inside out.',
    left: '0%',
  },
  {
    id: 2,
    title: 'Wireframe',
    description:
      'From bold, modern layouts to intuitive user flows, our designers bring your brand to life.',
    left: '35%',
  },
  {
    id: 3,
    title: 'Design and Prototype',
    description:
      'Once the design is finalized, our development team transforms it into a fully functional app.',
    left: '70%',
  },
  {
    id: 3,
    title: 'Design and Prototype',
    description:
      'Once the design is finalized, our development team transforms it into a fully functional app.',
    left: '70%',
  },
  {
    id: 3,
    title: 'Design and Prototype',
    description:
      'Once the design is finalized, our development team transforms it into a fully functional app.',
    left: '70%',
  },
  {
    id: 3,
    title: 'Design and Prototype',
    description:
      'Once the design is finalized, our development team transforms it into a fully functional app.',
    left: '70%',
  },
  {
    id: 3,
    title: 'Design and Prototype',
    description:
      'Once the design is finalized, our development team transforms it into a fully functional app.',
    left: '70%',
  },
  {
    id: 3,
    title: 'Design and Prototype',
    description:
      'Once the design is finalized, our development team transforms it into a fully functional app.',
    left: '70%',
  },
  {
    id: 3,
    title: 'Design and Prototype',
    description:
      'Once the design is finalized, our development team transforms it into a fully functional app.',
    left: '70%',
  },
];

function TimelineBox({
  title,
  description,
  left,
}: {
  title: string;
  description: string;
  left?: string;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 9,
        flexShrink: 0, // ✅ CRITICAL for horizontal scroll
        // transform: 'translateY(-50%)',
        zIndex: 2,
        width: 420,
      }}
    >
      {/* Heading (above bar) */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 2,
          width: '100%',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>

      {/* Description (below bar) */}
      <Typography
        variant="body2"
        sx={{
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
gsap.registerPlugin(ScrollTrigger);

export default function HowWeWorkLayout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     if (!sectionRef.current || !rightTrackRef.current) return;

  //     const cards = rightTrackRef.current.children;
  //     if (!cards.length) return;

  //     const cardWidth = 420;
  //     const gap = 32;

  //     const totalWidth = cards.length * (cardWidth + gap) - window.innerWidth;

  //     gsap.to(rightTrackRef.current, {
  //       x: -totalWidth,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top top',
  //         end: `+=${totalWidth}`,
  //         scrub: true,
  //         pin: true,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //   },
  //   { scope: sectionRef },
  // );

  return (
    // main section of the page
    <Box
      ref={sectionRef}
      sx={{
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        px: 6,
        pt: 4,
      }}
    >
      {/* Top-left Chip */}
      <Chip
        label="How we work"
        sx={{
          position: 'absolute',
          top: 24,
          left: 24,
          borderRadius: '999px',
          bgcolor: 'rgba(255,255,255,0.08)',
          color: '#fff',
          fontWeight: 500,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          maxWidth: 520,
          lineHeight: 1.1,
          mt: 6,
        }}
      >
        Smooth Journey from
        <br />
        Idea to Launch.
      </Typography>

      {/* Timeline Container */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: 1200,
          height: 300,
          overflow: 'visible',
          // position: 'absolute',
          // left: '50%',
          // top: '55%',
          // transform: 'translate(-50%, -50%)',
          // width: '100%',
          // maxWidth: 1200,
          // height: 300,
          // display: 'grid',
          // gridTemplateColumns: '1fr 1.5fr',
          // gap: 6,
          // overflowX: 'auto',
        }}
      >
        {/*  sub section left: Timeline */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'visible',
            bgcolor: 'transparent',
            zIndex: -1,
          }}
        >
          {''}
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 50,
            height: 50,
            backgroundColor: '#7B84FF',
            borderRadius: '999px',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            boxShadow: '0 0 30px rgba(123,132,255,0.6)',
          }}
        />

        {/*  sub section right: Timeline */}
        <Box
          ref={rightTrackRef}
          sx={{
            position: 'relative',
            width: '100%',
            // height: 'auto',
            overflowX: 'auto', // ✅ horizontal scroll
            // overflowY: 'hidden', // ✅ prevent vertical scroll
            display: 'flex',
            flexDirection: 'row',
            // Optional: smoother scroll UX
            // scrollBehavior: 'smooth',
            // Optional: hide scrollbar (Chrome)
            '&::-webkit-scrollbar': {
              display: 'none',
              height: 6,
            },
            // '&::-webkit-scrollbar-thumb': {
            //   backgroundColor: 'rgba(255,255,255,0.4)',
            //   borderRadius: 3,
            // },
            gap: 4,
            alignItems: 'center',
            bgcolor: 'rgba(227, 21, 21, 0.82)',
          }}
        >
          {/* Dot / Bar (static dot for now) */}
          {TIMELINE_STEPS.map((step) => (
            <TimelineBox
              key={uuidv4()}
              title={step.title}
              description={step.description}
              left={`${step.left}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
