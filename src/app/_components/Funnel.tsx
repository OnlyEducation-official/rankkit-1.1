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
          // backgroundColor: '#0C0C70',
          backgroundColor: 'white',
          padding: { xs: 2, sm: 3, md: 5 },
          color: 'black',
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
          paddingInline: 4,
          paddingBlock: 5,
          backdropFilter: 'blur(50px)',
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
              backgroundColor: 'hsla(0, 100%, 50%, 0.26)',
              color: 'black',
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
