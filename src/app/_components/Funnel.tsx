import { Stack, Box, Container, Typography } from '@mui/material';
import FunnelInfo from './funnelSection/funnelInfo';
import FunnelVideoo from './funnelSection/funnelVideoo';
import SplideCarousel from './funnelSection/carouselFunnel';

export default function Funnel() {
  return (
    <Container maxWidth="lg">
      <Stack>
        <Typography
          variant="h1"
          fontWeight={600}
          color="primary.main"
          sx={{ marginBlockEnd: { xs: '30px', md: 5 } }}
        >
          Where Talent Meets Visual Impact
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row', md: 'row' },
            justifyContent: 'space-around',
            // paddingTop: 5,
          }}
        >
          <Box>
            <FunnelInfo />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
            <FunnelVideoo />
          </Box>
        </Box>

        <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
          <SplideCarousel />
        </Box>
      </Stack>
    </Container>
  );
}
