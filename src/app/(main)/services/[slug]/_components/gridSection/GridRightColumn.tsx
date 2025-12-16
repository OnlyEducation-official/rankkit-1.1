'use client';

import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

// arrays of string at least 13 values
const headings = [
  'Heading 1',
  'Heading 2',
  'Heading 3',
  'Heading 4',
  'Heading 5',
  'Heading 6',
  'Heading 7',
  'Heading 8',
  'Heading 9',
  'Heading 10',
  'Heading 11',
  'Heading 12',
  'Heading 13',
  'Heading 6',
  'Heading 7',
  'Heading 8',
  'Heading 9',
  'Heading 10',
  'Heading 11',
  'Heading 12',
  'Heading 13',
  'Heading 10',
  'Heading 11',
  'Heading 12',
  'Heading 13',
  'Heading 6',
  'Heading 7',
  'Heading 8',
  'Heading 9',
  'Heading 10',
  'Heading 11',
  'Heading 12',
  'Heading 13',
];

export default function GridRightColumn() {
  const mediaUptioSevenSixEight = useMediaQuery('(max-width:767px)');
  const mediaUptioEleven = useMediaQuery('(max-width:1100px)');
  return (
    <Box sx={{ height: 400 }}>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: 'grey.100', padding: 2, height: 1, overflow: 'auto' }}
      >
        {headings.map((tech) => (
          <Grid
            key={tech}
            size={{
              xs: 12,
              sm: mediaUptioSevenSixEight ? 12 : 6,
              md: mediaUptioEleven ? 6 : 4,
              lg: 4,
            }}
            sx={{
              paddingInline: 2,
              paddingBlock: 1.5,
              border: '1px solid',
              borderColor: 'grey.200',
              backgroundColor: 'common.white',
              borderRadius: 1.5,
              display: 'flex',
              alignItems: 'center',
              columnGap: 1.5,
            }}
          >
            <BrightnessLowIcon />
            <Typography variant="body2" sx={{ width: 'fit-content' }}>
              Hello Eorld
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
