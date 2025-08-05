import { Stack, Box, Button, Container } from '@mui/material';
import FunnelInfo from './funnelSection/funnelInfo';
import FunnelVideoo from './funnelSection/funnelVideoo';
// import CarouselFunnel from './funnelSection/carouselFunnel';
import SplideCarousel from './funnelSection/carouselFunnel';

export default function Funnel() {
  return (
    <Container maxWidth="lg">
      <Stack
        sx={{
          backgroundColor: '#0C0C70',
          padding: { xs: 2, sm: 3, md: 5 },
          color: 'white',
          width: '100%',
          borderRadius: '10px',
          my: 10,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Button
            sx={{
              border: '1px solid hsla(0, 0%, 100%, .04)',
              backgroundColor: 'hsla(0, 0%, 100%, .04)',
              color: 'white',
              fontWeight: 'semibold',
              fontSize: { xs: '15px', md: '20px' },
              borderRadius: '2vw',
              padding: '5px 15px',
            }}
          >
            MID FUNNEL INFLUENCE
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row', md: 'row' },
            justifyContent: 'space-around',
            paddingTop: 5,
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
