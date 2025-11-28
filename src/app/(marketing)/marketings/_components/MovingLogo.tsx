import React, { useId } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

// MovingLogo.tsx
// A single-file React component you can drop into a Next.js + MUI project.
// - Uses CSS `aspect-ratio` to keep logo proportions
// - Creates a seamless continuous loop by duplicating the logo sequence
// - Exposes a few props for speed, size and direction
// - Uses Next/Image for optimized image handling in Next.js
type CssLength = `${number}px` | `${number}rem` | `${number}%` | number;

interface MovingLogoProps {
  src: string;
  alt?: string;
  height?: CssLength;
  logoSize?: CssLength;
  gap?: CssLength;
  speed?: number;
  reverse?: boolean;
}
export default function MovingLogo({
  src,
  alt = 'logo',
  height = 80,
  logoSize = 64,
  gap = 24,
  speed = 18,
  reverse = false,
}: MovingLogoProps) {
  const id = useId();
  // We'll create 2 identical tracks side-by-side and animate translateX to create a continuous marquee.
  // CSS approach keeps it smooth and GPU-accelerated.

  const trackStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    // make sure the duplicated content is inline and doesn't wrap
    whiteSpace: 'nowrap' as const,
    // allow the track to size to its content
  };

  const containerStyle = {
    overflow: 'hidden',
    height: typeof height === 'number' ? `${height}px` : height,
    width: '100%',
  } as const;

  // animation direction and duration
  const direction = reverse ? 'reverse' : 'normal';
  const animDuration = `${speed}s`;

  // each logo box preserves aspect ratio using CSS property aspect-ratio
  const logoBoxStyle = {
    width: typeof logoSize === 'number' ? `${logoSize}px` : logoSize,
    aspectRatio: '1/1', // keeps logo square — adjust if your logo isn't square
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  } as const;

  // We'll render 8 logos per track by default — adjust by repeating more or less as desired.
  const logos = new Array(8).fill(0).map(() => (
    <Box key={id} sx={logoBoxStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 600px) 40px, 64px"
        style={{ objectFit: 'contain' }}
      />
    </Box>
  ));

  // A small inline style block for the keyframes and animation.
  // We move the track by -50% so the second (duplicated) track starts exactly when the first finishes.
  /* eslint-disable react/no-unknown-property */
  const styleTag = (
    <style jsx>{`
      .moving-track {
        display: inline-flex;
        align-items: center;
      }

      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      .marquee-anim {
        display: inline-flex;
        animation-name: marquee;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: ${direction};
        animation-duration: ${animDuration};
        /* use will-change for smoother GPU accelerated animation */
        will-change: transform;
      }

      /* ensure duplicated content renders inline and has no gaps from line-height */
      .marquee-anim > div {
        display: inline-flex;
      }
    `}</style>
  );

  return (
    <Box sx={containerStyle}>
      {styleTag}

      {/* Two identical tracks inside one animated wrapper to produce a seamless loop */}
      <Box className="marquee-anim" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box className="moving-track" sx={trackStyle}>
          {logos}
        </Box>

        {/* duplicate */}
        <Box className="moving-track" sx={trackStyle}>
          {logos}
        </Box>
      </Box>
    </Box>
  );
}

/*
Usage example (e.g., in pages/index.tsx):

import MovingLogo from '@/components/MovingLogo';

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <MovingLogo
        src="/logo.svg"
        alt="Acme logo"
        height={96}
        logoSize={72}
        gap={32}
        speed={16}
        reverse={false}
      />
    </div>
  );
}

Notes & tips:
- `aspectRatio: '1/1'` keeps logos square. Change to '16/9' or a numeric ratio if your logo has different proportions.
- If your logo is remote (external host), add its domain to next.config.js `images.domains`.
- Increase the `logos` array length if you see visual gaps at very large widths.
- For ultra-smooth motion and complex needs, swap CSS animation for `framer-motion`'s `useAnimation` and a translated loop technique.
*/
