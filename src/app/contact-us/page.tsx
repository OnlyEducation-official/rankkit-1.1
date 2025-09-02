import { Box, Container, Paper, Stack, Typography, Divider, Button, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContactForm from './_components/ContactForm';
import RightSectionContactForm from './_components/RightSection';
import ContactMap from './_components/ContactMap';

const url = `${process.env.BACKEND_URL}contact-uses?fields=id&populate[seo][fields]=metaTitle,metaDescription`;
export async function generateMetadata() {
  const response = await fetch(url).then((res) => res.json());
  const seoData = response.data[0].seo;

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
  };
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600}>
        {value}
      </Typography>
    </Stack>
  );
}

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, marginTop: '100px' }}>
        <Typography variant="h3" fontWeight={800} sx={{ letterSpacing: -0.5 }}>
          Let’s grow your brand
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Tell us about your goals—our team usually replies within{' '}
          <Box component="span" fontWeight={600}>
            1 business day
          </Box>
          .
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2, flexWrap: 'wrap' }}>
          <Chip size="small" label="Google Partner" variant="outlined" />
          <Chip size="small" label="Meta Business Partner" variant="outlined" />
          <Chip size="small" label="200+ Successful Campaigns" variant="outlined" />
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              borderColor: 'divider',
            }}
          >
            <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
              Start a project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fill out the form—strategy, timelines, and pricing in your inbox.
            </Typography>

            <ContactForm />

            {/* <Typography variant="caption" color="text.secondary" component="p">
              By submitting this form, you agree to our{' '}
              <Box
                component="a"
                href="/privacy"
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Privacy Policy
              </Box>
              .
            </Typography> */}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              borderColor: 'divider',
              position: { md: 'sticky' },
              top: { md: 24 },
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Prefer talking to a strategist?
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 2 }}>
              Open 24/7, 365 days — IST (UTC+05:30)
            </Typography>

            <RightSectionContactForm />

            <Divider sx={{ my: 2.5 }} />
            <Stack spacing={1}>
              <Row label="Response time" value="&lt; 24 hours" />
              <Row label="Average onboarding" value="5–7 business days" />
              <Row label="Locations" value="Navi Mumbai • Remote" />
            </Stack>

            <Button
              fullWidth
              variant="outlined"
              endIcon={<OpenInNewIcon />}
              href="https://maps.google.com/?q=RankKit%20Media%20LLP"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 2 }}
            >
              Open in Google Maps
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <ContactMap />
    </Container>
  );
}
