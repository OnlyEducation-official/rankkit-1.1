import { Box, Container, Grid, Typography } from '@mui/material';
import brandingService from '@/assets/images/services-logo/branding-services.png';
import mediaProductionCover from '@/assets/images/services-logo/media-production-service.png';
import SocialMediaService from '@/assets/images/services-logo/digital-marketing-service.png';
import digitalMarketingService from '@/assets/images/services-logo/seo-service.png';
import ServicesSwiper from './ServicesSwiper';

const services = [
  {
    title: 'Media Production',
    description:
      'Whether it’s professional product photography, immersive 360° views, or full-scale event coverage, our production team delivers with cinematic quality. Studio shoots, podcasts, and webinars are handled end-to-end.',
    image: mediaProductionCover.src,
  },
  {
    title: 'Digital Marketing',
    description:
      'Visibility starts with search. We help your brand rank higher on Google, drive organic traffic, and convert leads Without relying solely on ads.',
    image: digitalMarketingService.src,
  },
  {
    title: 'Social Media Management',
    description:
      'From content calendars to creative design, ad management, and community building, we ensure your brand voice connects, engages, and grows across every platform.',
    image: SocialMediaService.src,
  },
  {
    title: 'Branding & Multimedia',
    description:
      'From logos and style guides to marketing collateral and motion graphics, our designs ensure consistency and recognition. Every visual we craft tells your brand’s story.',
    image: brandingService.src,
  },
];

export default function CoreServices() {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ justifyContent: 'center', paddingBlock: { xs: 4.5, md: 8 } }}>
        <Box sx={{ marginBlockEnd: { xs: 4, md: 4 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '600 !important',
              marginBlockEnd: 1,
              typography: { xs: 'h5', md: 'h3' },
              textAlign: 'center',
            }}
          >
            Your Growth, Delivered End-to-End
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              typography: { xs: 'body1', md: 'subtitle2' },
              color: 'text.secondary',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            From ads and content to {/* &nbsp; */}
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              SEO
            </Box>
            ,{' '}
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              design
            </Box>
            , and{' '}
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              media production
            </Box>
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              we handle everything.
            </Box>
          </Typography>
        </Box>
        <ServicesSwiper services={services} />
      </Grid>
    </Container>
  );
}
