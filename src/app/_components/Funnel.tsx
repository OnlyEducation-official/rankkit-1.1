'use client';

import { Stack, Box, Button, Container, useTheme } from '@mui/material';
import FunnelInfo from './funnelSection/funnelInfo';
import FunnelVideoo from './funnelSection/funnelVideoo';
// import CarouselFunnel from './funnelSection/carouselFunnel';
import SplideCarousel from './funnelSection/carouselFunnel';

export default function Funnel() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Stack
        sx={{
          backgroundColor: theme.palette.background.paper, // Use theme's paper background for consistency (usually white)
          padding: { xs: 3, sm: 4, md: 8 }, // Increased padding for more breathing room
          color: theme.palette.text.primary, // Use theme's primary text color
          width: '100%',
          borderRadius: theme.shape.borderRadius * 2, // More pronounced rounding
          mb: { xs: 8, md: 12 }, // More margin at the bottom for separation
          boxShadow: theme.shadows[10], // A deeper, more premium shadow
          // backdropFilter: 'blur(50px)', // Keep if you have a background that would be blurred
          border: `1px solid ${theme.palette.divider}`, // Subtle border for definition
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 }, // Add margin bottom for spacing below the button
          }}
        >
          <Button
            variant="contained" // Use MUI's contained variant for a more professional button
            disableElevation // Removes default button shadow if not desired
            sx={{
              backgroundColor: theme.palette.primary.light, // A softer primary color for the button background
              color: theme.palette.primary.contrastText, // Text color that contrasts well
              fontWeight: theme.typography.fontWeightBold, // Use theme's bold font weight
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' }, // Responsive font size for button
              borderRadius: theme.shape.borderRadius * 4, // More rounded pill shape
              padding: { xs: '8px 20px', md: '10px 25px' }, // Adjust padding
              textTransform: 'uppercase', // Standard for marketing buttons
              letterSpacing: '0.05em', // A bit of letter spacing
              border: `1px solid ${theme.palette.primary.main}`, // Stronger border in primary color
              transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
              '&:hover': {
                backgroundColor: theme.palette.primary.main, // Darker primary on hover
                boxShadow: theme.shadows[4], // Slight shadow on hover
                transform: 'translateY(-2px)', // Subtle lift
              },
            }}
          >
            MID FUNNEL INFLUENCE
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'column', md: 'row' }, // Adjusted for sm: column to better control flow
            justifyContent: 'space-around',
            alignItems: 'center', // Vertically center content if there's height difference
            gap: { xs: 4, md: 8 }, // Gap between the info and video sections
            pb: { xs: 4, md: 6 }, // Padding bottom before carousel
          }}
        >
          <Box
            sx={{
              flex: 1, // Allow FunnelInfo to take available space
              maxWidth: { xs: '100%', md: '50%' }, // Constrain width on larger screens
              pr: { md: 4 }, // Add some padding right if FunnelInfo is on the left
            }}
          >
            <FunnelInfo />
          </Box>
          <Box>
            <FunnelVideoo />
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          {' '}
          {/* Margin top to separate from video section */}
          <SplideCarousel />
        </Box>
      </Stack>
    </Container>
  );
}
