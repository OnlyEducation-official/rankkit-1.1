/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// StudioTop.tsx

'use client';

import { Box, Stack, Typography } from '@mui/material';
import Panorama from '../MyPanoramaComponent';

export default function StudioTop() {
  const heroPointer = [
    { id: 1, name: 'Lights roll and stories unfold.' },
    { id: 2, name: 'Cuts aren’t just edits, they’re brand-defining moments.' },
    { id: 3, name: 'Campaigns are not just produced, they’re engineered for impact' },
  ];

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 5,
        alignItems: { xs: 'stretch', md: 'flex-start' },
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '38%' } }}>
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
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '62%' },
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          position: 'relative',

          // Responsive sizing rules:
          // - On phones, use a wide aspect (16/9) with a sensible min height
          // - On tablets, slightly taller
          // - On desktops, balanced portrait-ish 5/4 with max-height guard
          aspectRatio: { xs: '16 / 9', sm: '4 / 3', md: '5 / 4' },
          minHeight: { xs: 260, sm: 360, md: 420 },
          maxHeight: { md: 620 },
        }}
      >
        {/* Panorama will fill this frame (height: 100%) */}
        <Panorama
          src="https://cdn.rawgit.com/mistic100/Photo-Sphere-Viewer/3.1.0/example/Bryce-Canyon-National-Park-Mark-Doliner.jpg"
          caption="Studio — 360° view"
          height="100%"
          rounded={0}
          navbar={['move', 'fullscreen', 'caption']}
          lockZoom
        />
      </Box>
    </Stack>
  );
}
