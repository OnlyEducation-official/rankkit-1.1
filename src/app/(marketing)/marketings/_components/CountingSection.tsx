'use client';

import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CoutingCard, { CoutingCardProps } from '../CoutingCard';

const stats: CoutingCardProps[] = [
  {
    endCount: 200,
    title: 'Web Development',
    sign: '$',
  },
  {
    endCount: 1200,
    title: 'Branding  Multimedia',
    sign: '%',
  },
  {
    endCount: 1400,
    title: 'Media Production',
    sign: 'AE',
  },
  {
    endCount: 14335,
    title: 'Digital Marketing',
    sign: '+',
  },
  {
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
    <Container>
      <Grid container spacing={{ xs: 0, md: 4 }} justifyContent="space-around" sx={{ mt: 2 }}>
        {visibleStats.map((item) => (
          <Grid size={{ xs: 6, sm: 2 }} key={item.title} sx={{}}>
            <CoutingCard endCount={100} title={item.title} sign={item.sign} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
