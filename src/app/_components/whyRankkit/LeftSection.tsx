import { Grid, Typography, Box, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import whyRankkitSectionImg from '@/assets/images/whyRankkitSectionImg.png';

const gaps = {
  xs: {
    min1: '7px',
    min: '10px',
    med: '16.18px',
    max: '26.06px',
  },
  md: {
    min1: '9px',
    min: '13px',
    med: '19px',
    max: '29.06px',
    max1: '36px',
  },
};

export default function LeftSection() {
  return (
    <Box sx={{ position: 'sticky', top: 80 }}>
      <Typography
        variant="h2"
        fontWeight={600}
        sx={{ color: 'primary.main', paddingBlockEnd: gaps.md.max1 }}
      >
        Why
        <Box component="span" sx={{ color: 'error.main', display: { xs: 'block', sm: 'inline' } }}>
          {' '}
          Rankkit
        </Box>
        ?
      </Typography>
      <Stack
        gap={{ xs: gaps.xs.min, md: gaps.md.med }}
        sx={{ paddingInlineStart: { xs: 0, sm: 5 } }}
      >
        <Box>
          <Typography variant="h4" fontWeight={600} sx={{ color: { md: 'primary.main' } }}>
            Unlock the Power of
          </Typography>
          <Typography variant="h4" fontWeight={600} sx={{ color: { md: 'error.main' } }}>
            Full-Suite Digital Innovation
          </Typography>
        </Box>
        <Typography variant="body1">
          {`At RankKit, we don't just deliver services — we engineer transformations. As a
              full-service digital agency, we bring together branding, technology, marketing, and
              media under one roof to help businesses grow with purpose and performance. From
              high-converting websites to influencer-led content strategies, our work is driven by
              strategy, crafted with creativity, and executed with precision. `}
        </Typography>
        <Typography variant="body1">
          We collaborate with startups, personal brands, and large enterprises to unlock growth
          across every digital touchpoint — delivering measurable ROI, industry credibility, and
          long-term brand value.
        </Typography>
      </Stack>
      {/* image */}
      <Box sx={{ flex: 1, width: 1, position: 'relative', maxHeight: { xs: '450px' } }}>
        <Image
          src={whyRankkitSectionImg}
          alt="image"
          style={{ width: '100%', height: '100%', maxHeight: '450px', aspectRatio: '1.46 / 1' }}
        />
      </Box>
    </Box>
  );
}
