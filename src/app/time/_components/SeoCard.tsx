import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

export default function SeoCard({
  image,
  heading,
  description,
}: {
  image: StaticImageData;
  heading: string;
  description: string;
}) {
  return (
    // <Grid size={{ xs: 12, md: 6 }} sx={{ }}>
    <Box
      sx={{
        position: 'relative',
        maxWidth: { xs: '90%', sm: 450 }, // 🔒 max width of card
        width: '100%', // responsive shrink
        mx: 'auto', // center horizontally
        p: { xs: 3, md: 4 },
        // borderRadius: 3,
        bgcolor: 'background.paper',
        boxShadow: 3,
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        justifyContent: 'space-evenly',
        flexShrink: 1,
      }}
    >
      {/* Floating Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(48px, 6vw, 64px)', // 👈 vw-based sizing
          height: 'clamp(48px, 6vw, 64px)',
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={image}
            alt={heading}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          textAlign: 'center',
          fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', // h5 visual scale
          lineHeight: 'clamp(1.35, 1.6vw, 1.45)',
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)', // body2 scale
          lineHeight: 'clamp(1.55, 1.8vw, 1.7)', // comfortable for 4–5 lines
        }}
      >
        {description}
      </Typography>
    </Box>
    // </Grid>
  );
}
