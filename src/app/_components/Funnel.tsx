import { Stack, Box, Button, Container, Typography } from '@mui/material';
import FunnelInfo from './funnelSection/funnelInfo';
import FunnelVideoo from './funnelSection/funnelVideoo';
// import CarouselFunnel from './funnelSection/carouselFunnel';
import SplideCarousel from './funnelSection/carouselFunnel';

export default function Funnel() {
  return (
    <Container maxWidth="lg">
      <Stack>
        {/* <Box
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
        </Box> */}
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
