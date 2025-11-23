import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import metaAds1 from '@/assets/images/marketing/meta_ads_1.jpg';
import metaAds3 from '@/assets/images/marketing/meta_ads_3.png';
import metaAds4 from '@/assets/images/marketing/meta_ads_4.png';
import metaAds5 from '@/assets/images/marketing/meta_ads_5.png';
import metaAds6 from '@/assets/images/marketing/meta_ads_6.jpg';

export default function BentoGrid() {
  return (
    <Box sx={{ bgcolor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, textAlign: 'center', color: 'primary.main' }}
        >
          Our work that speaks volume
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, textAlign: 'center' }}>
          Explore our sections as per your needs!
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gridTemplateRows: 'repeat(3, 200px)',
            gap: 2,
            paddingBlock: 4,
            // bgcolor: 'grey.100',
          }}
        >
          <Box sx={{ gridRowStart: 1, gridRowEnd: 4, position: 'relative' }}>
            <Image
              src={metaAds3}
              alt="meta img"
              fill
              style={{ objectFit: 'fill', borderRadius: '10px' }}
            />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Image
              src={metaAds5}
              alt="meta img"
              fill
              style={{ objectFit: 'fill', borderRadius: '10px' }}
            />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Image
              src={metaAds4}
              alt="meta img"
              fill
              style={{ objectFit: 'fill', borderRadius: '10px' }}
            />
          </Box>
          <Box
            sx={{
              // bgcolor: 'red',
              gridRowStart: 2,
              gridRowEnd: 4,
              gridColumnStart: 2,
              gridColumnEnd: 4,
              position: 'relative',
            }}
          >
            <Image
              src={metaAds6}
              alt="meta img"
              fill
              style={{ aspectRatio: 1 / 1, borderRadius: '10px' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
