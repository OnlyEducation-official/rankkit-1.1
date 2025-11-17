import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ContactMap() {
  const embedSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4953682943587!2d73.00654357593645!3d19.08591235165981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c117f605b2f1%3A0xfefff80a3a005cb2!2sRankKit%20Media%20LLP!5e0!3m2!1sen!2sin!4v1756020925641!5m2!1sen!2sin';

  const mapsLink = 'https://www.google.com/maps/place/RankKit+Media+LLP/@19.0859123,73.0065436,17z';

  return (
    <Box component="section" sx={{ my: { xs: 4, md: 6 } }}>
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          borderColor: 'divider',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
          spacing={1.5}
          sx={{ mb: 2 }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              My Location Map
            </Typography>
            <Typography variant="body2" color="text.secondary">
              RankKit Media LLP • Navi Mumbai
            </Typography>
          </Box>

          <Button
            variant="outlined"
            size="small"
            endIcon={<OpenInNewIcon fontSize="small" />}
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            Open in Google Maps
          </Button>
        </Stack>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: 1,

            aspectRatio: { xs: '4 / 3', sm: '16 / 9', md: '3 / 2' },
            minHeight: { xs: 260, sm: 320, md: 420 },
            maxHeight: { md: 560 },
          }}
        >
          <Box
            component="iframe"
            src={embedSrc}
            title="Office location map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5 }}>
          Tip: Tap “Open in Google Maps” for live directions and traffic.
        </Typography>
      </Paper>
    </Box>
  );
}
