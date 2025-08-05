import { Box, Stack } from '@mui/material';
import Image from 'next/image';

export default function StudioBottom() {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '60%', md: '60%' },
          height: { xs: '250px', sm: '320px', md: '350px' },
          position: 'relative',
        }}
      >
        <Image
          src="/videos/1.png"
          alt="studio"
          fill
          //   height={200}
          //   width={200}
          style={{ borderRadius: 20, objectFit: 'fill' }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', sm: '40%', md: '40%' },
          height: { xs: '250px', sm: '320px', md: '350px' },
          position: 'relative',
        }}
      >
        <Image
          src="/videos/2.png"
          alt="studio"
          fill
          //   height={200}
          //   width={200}
          style={{ borderRadius: 20, objectFit: 'fill' }}
        />
      </Box>
    </Stack>
  );
}
