/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// StudioTop.tsx

'use client';

import { Box, Grid, Typography } from '@mui/material';
import Panorama from '../MyPanoramaComponent';

export default function StudioTop() {
  const heroPointer = [
    { id: 1, name: 'Lights roll and stories unfold.' },
    { id: 2, name: 'Cuts aren’t just edits, they’re brand-defining moments.' },
    { id: 3, name: 'Campaigns are not just produced, they’re engineered for impact' },
  ];

  return (
    <Grid spacing={2} container>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography variant="h2" sx={{ fontWeight: 600, color: 'error.main' }}>
          <Box component="span" sx={{ color: 'primary.main' }}>
            Our
          </Box>{' '}
          Studio
        </Typography>

        <Typography
          variant="h5"
          sx={{ pl: { xs: 0, md: 3 }, fontWeight: 600, pt: 1.5, lineHeight: 1.25 }}
        >
          <Box component="span" sx={{ color: 'primary.main' }}>
            Where Raw Ideas Meet{' '}
          </Box>
          <br />
          <Box component="span" sx={{ color: 'error.main' }}>
            Real Execution.
          </Box>
        </Typography>

        <Box sx={{ pl: { xs: 0, md: 3 }, mt: 2 }}>
          <Typography paragraph>
            Step inside our production house — not just a studio, but the heartbeat of every
            campaign we craft.
          </Typography>
          <Typography paragraph>
            This is where brands are born, shaped, and scaled. It’s a creative lab, a collaborative
            zone, and a launchpad for ideas that don’t just look good — they convert, connect, and
            command attention.
          </Typography>

          <Box component="ul" sx={{ pl: 3, m: 0 }}>
            {heroPointer.map((p) => (
              <Box key={p.id} component="li" sx={{ mb: 0.75 }}>
                {p.name}
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 7 }} sx={{ flex: 1 }}>
        <Box sx={{ height: { xs: '500px', md: 1 }, width: 1 }}>
          <Panorama
            src="/videos/studioOverview.png"
            caption="Rankkit Studio +1200sqft"
            height="100%"
            rounded={0}
            navbar={['move', 'fullscreen', 'caption']}
            lockZoom
          />
        </Box>
      </Grid>
    </Grid>
  );
}
