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
            gridTemplateColumns: {
              xs: '1fr', // 1 per row → 4 rows
              sm: '1fr 1fr', // 2 per row → 2 rows
              md: '2fr 1fr 1fr', // your desktop layout
            },
            gridTemplateRows: {
              xs: 'repeat(4, 200px)', // 4 rows
              sm: 'repeat(2, 200px)', // 2 rows
              md: 'repeat(3, 200px)', // your original
            },
            gap: 2,
            paddingBlock: 4,
          }}
        >
          {/* Big left image */}
          <Box
            sx={{
              gridRow: { xs: 'auto', sm: 'auto', md: '1 / 4' },
              gridColumn: { xs: 'auto', sm: 'auto', md: '1 / 2' },
              position: 'relative',
            }}
          >
            <Image
              src={metaAds3}
              alt="meta img"
              fill
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </Box>

          {/* Top-right 1 */}
          <Box
            sx={{
              gridRow: { xs: 'auto', sm: 'auto', md: '1 / 2' },
              gridColumn: { xs: 'auto', sm: 'auto', md: '2 / 3' },
              position: 'relative',
            }}
          >
            <Image
              src={metaAds5}
              alt="meta img"
              fill
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </Box>

          {/* Top-right 2 */}
          <Box
            sx={{
              gridRow: { xs: 'auto', sm: 'auto', md: '1 / 2' },
              gridColumn: { xs: 'auto', sm: 'auto', md: '3 / 4' },
              position: 'relative',
            }}
          >
            <Image
              src={metaAds4}
              alt="meta img"
              fill
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </Box>

          {/* Bottom-right big */}
          <Box
            sx={{
              gridRow: { xs: 'auto', sm: 'auto', md: '2 / 4' },
              gridColumn: { xs: 'auto', sm: 'auto', md: '2 / 4' },
              position: 'relative',
            }}
          >
            <Image
              src={metaAds6}
              alt="meta img"
              fill
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
