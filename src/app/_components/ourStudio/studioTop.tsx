import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function StudioTop() {
  const heroPointer = [
    {
      id: 1,
      name: 'Lights roll and stories unfold.',
    },
    {
      id: 2,
      name: 'Cuts aren’t just edits, they’re brand-defining moments.',
    },
    {
      id: 3,
      name: 'Campaigns are not just produced, they’re engineered for impact',
    },
  ];

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 5,
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '35%' } }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Our Studio
        </Typography>
        <Typography variant="h5" sx={{ paddingLeft: { xs: 0, md: 3 }, fontWeight: 'bold' }}>
          Where Raw Ideas Meet <br /> <span>Real Execution.</span>
        </Typography>

        {/* Changed parent Typography to Box */}
        <Box sx={{ paddingLeft: { xs: 0, md: 3 } }}>
          <Typography>
            {' '}
            {/* This Typography is now a sibling of another block element */}
            Step inside our production house — not just a studio, but the heartbeat of every
            campaign we craft.
          </Typography>
          <Typography>
            This is where brands are born, shaped, and scaled. It’s a creative lab, a collaborative
            zone, and a launchpad for ideas that don’t just look good — they convert, connect, and
            command attention.
          </Typography>
          <ul>
            {heroPointer.map((pointer) => (
              <li key={pointer.id}>{pointer.name}</li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '65%' },
          height: { xs: '250px', sm: 'auto', md: 'auto' },
          position: 'relative',
        }}
      >
        <iframe
          title="title"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          scrolling="no"
          src="https://kuula.co/share/h8jS0?logo=1&info=1&fs=1&vr=0&thumbs=1"
          style={{ borderRadius: '25px' }}
        />
      </Box>
    </Stack>
  );
}
