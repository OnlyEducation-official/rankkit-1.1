import { Stack, Box, Container, Typography, Grid } from '@mui/material';
import FunnelInfo from './funnelSection/funnelInfo';
import FunnelVideoo from './funnelSection/funnelVideoo';
import SplideCarousel from './funnelSection/carouselFunnel';

export default function Funnel() {
  return (
    <Box sx={{ paddingBlock: { xs: 6, md: 12 }, bgcolor: 'grey.300' }}>
      <Container maxWidth="lg">
        <Stack>
          <Typography
            variant="h2"
            sx={{ fontWeight: 600, color: 'error.main', marginBlockEnd: { xs: '30px', md: 4 } }}
          >
            Our{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Services
            </Box>
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              flexDirection: { xs: 'column-reverse', sm: 'row' },
              justifyContent: 'space-around',
            }}
          >
            <Grid size={{ xs: 12, sm: 7 }}>
              <FunnelInfo />
            </Grid>
            <Grid size={{ xs: 12, sm: 5 }} sx={{ flex: 1 }}>
              <Box
                sx={{
                  height: '100%',
                  boxShadow: '1px 1px 10px 0px #0800f321',
                  borderRadius: '15px',
                }}
              >
                <FunnelVideoo />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
            <SplideCarousel />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
