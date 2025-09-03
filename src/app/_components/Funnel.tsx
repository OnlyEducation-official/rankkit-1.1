import { Stack, Box, Container, Typography, Grid } from '@mui/material';
import FunnelInfo from './funnelSection/funnelInfo';
import FunnelVideoo from './funnelSection/funnelVideoo';
import YouTubeGrid from './funnelSection/YoutubeGrid';

const url = `${process.env.BACKEND_URL}homes?fields=id&populate[seo][fields]=metaTitle,metaDescription&populate[seo][populate][shareImage][fields]=url,alternativeText&populate[Hero][fields]=title&populate[Hero][populate][hero_video][fields]=url,alternativeText&populate[shorts]=*`;

export default async function Funnel() {
  const response = await fetch(url).then((res) => res.json());
  const data = response.data[0];
  return (
    <Box sx={{ paddingBlock: { xs: 6, md: 12 }, bgcolor: 'grey.300' }}>
      <Container maxWidth="lg">
        <Stack>
          <Typography
            variant="h2"
            sx={{ fontWeight: 600, color: 'error.main', marginBlockEnd: { xs: '30px', md: 4 } }}
          >
            Where{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Talent Meets Visual Impact
            </Box>
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              flexDirection: { xs: 'column-reverse', md: 'row' },
              justifyContent: 'space-around',
            }}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <FunnelInfo />
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                flex: 1,
                height: { xs: '400px', md: 'auto' },
                display: { sm: 'flex', md: 'block' },
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  boxShadow: { md: '1px 1px 10px 0px #0800f321' },
                  borderRadius: 3,
                  width: { xs: 1, sm: '450px', md: '100%' },
                }}
              >
                <FunnelVideoo />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ marginBlockStart: { xs: '30px', md: '50px' } }}>
            <YouTubeGrid shorts={data.shorts} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
