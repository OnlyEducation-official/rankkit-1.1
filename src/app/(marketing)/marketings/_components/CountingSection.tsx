'use client';

import { Box, Grid } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import imgOne from '@/assets/images/gallery/gallery1.png';
import imgTwo from '@/assets/images/gallery/gallery2.png';
import imgThree from '@/assets/images/gallery/gallery3.png';
import CoutingCard, { CoutingCardProps } from '../CoutingCard';

const stats: CoutingCardProps[] = [
  {
    image: imgOne,
    endCount: 200,
    title: 'Web Development',
    sign: '$',
  },
  {
    image: imgTwo,
    endCount: 1200,
    title: 'Branding  Multimedia',
    sign: '%',
  },
  {
    image: imgThree,
    endCount: 1400,
    title: 'Media Production',
    sign: 'AE',
  },
  {
    image: imgThree,
    endCount: 14335,
    title: 'Digital Marketing',
    sign: '+',
  },
  {
    image: imgThree,
    endCount: 143354,
    title: 'Seo Services',
    sign: '+',
  },
];
export default function CountingSection() {
  const [visibleStats, setVisibleStats] = useState<CoutingCardProps[] | null>(null);

  useEffect(() => {
    const getVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 600) return stats.slice(0, 4); // xs: 4 cards
      if (width <= 1200) return stats.slice(0, 4); // xs: 4 cards
      return stats.slice(0, 6); // lg: 6 cards (or all if less)
    };
    setVisibleStats(getVisibleCards());
    const handleResize = () => setVisibleStats(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (!visibleStats) return null;

  return (
    <Grid container spacing={{ xs: 0, md: 4 }} justifyContent="space-around" sx={{ mt: 2 }}>
      {visibleStats.map((item) => (
        <Grid size={{ xs: 6, sm: 2 }} key={item.title} sx={{}}>
          <CoutingCard
            endCount={100}
            image={{
              height: 100,
              src: item?.image.src,
              width: 100,
            }}
            title={item.title}
            sign={item.sign}
          />
        </Grid>
      ))}
    </Grid>
  );
}
