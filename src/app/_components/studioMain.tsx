import { Box, Container, Stack } from '@mui/material';
import StudioTop from './ourStudio/studioTop';
import StudioBottom from './ourStudio/studioBottom';

export default function StudioMain() {
  return (
    <Box sx={{ bgcolor: 'grey.300', paddingBlock: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg" sx={{ bgcolor: 'grey.300' }}>
        <Stack>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
              <StudioTop />
            </Box>
            <Box>
              <StudioBottom />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
