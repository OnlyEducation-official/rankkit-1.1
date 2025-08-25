'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import img from '@/assets/images/whyRankkitSectionImg.png';
import rankkitTextLogo from '@/assets/images/rankitTextLogo.png';

const quotes = [
  'Your brand’s next big leap starts with a single conversation.',
  'Every great success story begins with the right partner — let’s write yours.',
  'The best time to grow your brand was yesterday. The next best time is now.',
  'Ideas are powerful, but execution changes the game. Let’s make it happen.',
  'Don’t wait for opportunities. Let’s create them together.',
  'Your vision, our execution — together, we can’t be stopped.',
  'It’s not just business, it’s your legacy. We’ll help you build it.',
  'Talk to us today, and tomorrow your brand will thank you.',
];

export default function RightSectionContactForm() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < quotes[quoteIndex].length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + quotes[quoteIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(typingTimeout);
    }

    const nextQuoteTimeout = setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setDisplayText('');
      setCharIndex(0);
    }, 2000);
    return () => clearTimeout(nextQuoteTimeout);
  }, [charIndex, quoteIndex]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: '#bebebe96',
        position: 'relative',
        color: 'white',
      }}
    >
      <Box
        sx={{
          //   position: 'absolute',
          //   top: '130px',
          width: '100%',
          height: 'calc(100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'var(--font-clash-display), sans-serif',
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          {displayText}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ width: '100%', aspectRatio: '1.4 / 1', position: 'relative' }}>
            <Image src={img} alt="logo" fill style={{ objectFit: 'contain' }} />
          </Box>

          <Box sx={{ paddingInline: 8 }}>
            <Box
              sx={{
                width: '100%',
                position: 'relative',
                aspectRatio: '3.11 / 1',
                paddingTop: '20px',
              }}
            >
              <Image src={rankkitTextLogo} alt="logo" fill style={{ objectFit: 'contain' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
