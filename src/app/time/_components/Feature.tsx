import { Box, Grid, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import ImageOne from '@/assets/images/backend.webp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  direction: string;
  image: StaticImageData;
  title: string;
  description: string;
  highlights: string[];
  descriptionTwo: string;
  hightlightTitle?: string;
}
export default function Feature({
  direction,
  image,
  title,
  description,
  highlights,
  descriptionTwo,
  hightlightTitle,
}: Props) {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // 🔑 mobile stack
          md: direction, // 🔑 desktop layout
        },
      }}
      spacing={4}
    >
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 600, // fixed upper bound
            aspectRatio: '4 / 3', // 🔑 stable layout
            borderRadius: '20px',
            overflow: 'hidden',
            mx: 'auto',

            display: 'flex',
            alignItems: 'center', // ✅ vertical center
            justifyContent: 'center', // ✅ horizontal center
            boxShadow:
              direction === 'row'
                ? '-7.9px -8.5px 0px 5.2px rgba(0, 0, 0, 1)'
                : '7.9px 8.5px 0px 5.2px rgba(0, 0, 0, 1)',
            border: '1px solid',
            borderColor: 'black',
            // Optional minimum size
            minWidth: { xs: 280, sm: 400 },
          }}
        >
          <Image
            src={image.src}
            alt="Feature Image"
            fill
            sizes="(max-width: 900px) 100vw, 600px"
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: { xs: 0, md: 3 } }}>
          <Typography variant="h4" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#000' }}>
            {hightlightTitle}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {highlights?.map((item) => (
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                }}
                key={uuidv4()}
              >
                <CheckCircleIcon color="primary" />
                <Typography variant="body1" color="text.secondary">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="body1" color="text.secondary">
            {descriptionTwo}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
