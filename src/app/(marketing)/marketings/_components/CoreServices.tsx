import { Box, Container, Grid, Typography } from '@mui/material';
import c from '@/assets/images/c.jpg';
import ServicesSwiper from './ServicesSwiper';

const services = [
  {
    title: 'Digital Marketing',
    description:
      'Crafting memorable brand experiences that resonate with your audience and stand out in the market.',
    image: c,
  },
  {
    title: 'Digital Marketing',
    description:
      'Building high-performance, visually stunning websites that convert visitors into customers.',
    image: c,
  },
  {
    title: 'Digital Marketing',
    description:
      'Driving targeted traffic and maximizing your ROI through strategic, data-driven marketing campaigns.',
    image: c,
  },
  {
    title: 'Digital Marketing',
    description:
      'Driving targeted traffic and maximizing your ROI through strategic, data-driven marketing campaigns.',
    image: c,
  },
];

export default function CoreServices() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ justifyContent: 'center', paddingBlock: { xs: 3, md: 8 } }}>
        <Box sx={{ marginBlockEnd: { xs: 4, md: 4 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '600 !important',
              marginBlockEnd: 1,
              typography: { xs: 'h5', md: 'h3' },
            }}
          >
            Your Growth, Delivered End-to-End
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              width: { xs: 1, sm: 0.6 },
              typography: { xs: 'body1', md: 'subtitle2' },
              color: 'text.secondary',
            }}
          >
            We combine creative storytelling with data-driven execution to offer complete
            support—ads, content, strategy, design, SEO, and media production.
          </Typography>
        </Box>
        <ServicesSwiper services={services} />
      </Grid>
    </Container>
  );
}
