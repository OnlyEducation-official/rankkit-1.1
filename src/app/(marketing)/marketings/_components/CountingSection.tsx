'use client';

import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CoutingCard, { CoutingCardProps } from '../CoutingCard';

const stats: CoutingCardProps[] = [
  {
    endCount: 572,
    title: 'Podcast Shoot',
    sign: '+',
  },
  {
    endCount: 898,
    title: 'ADs Campaign',
    sign: '+',
  },
  {
    endCount: 126,
    title: 'Clients',
    sign: '+',
  },
  {
    endCount: 169,
    title: 'Client Satisfaction',
    sign: '+',
  },
  {
    endCount: 843,
    title: 'Video Shoot',
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
    <Container maxWidth="xl">
      <Grid
        container
        spacing={{ xs: 0, md: 4 }}
        justifyContent="space-around"
        sx={{ paddingBlockStart: 2 }}
      >
        {visibleStats.map((item) => (
          <Grid size={{ xs: 6, sm: 2 }} key={uuidv4()} sx={{}}>
            <CoutingCard endCount={item.endCount} title={item.title} sign={item.sign} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
