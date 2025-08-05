import { Box, Container, Stack } from '@mui/material';
import StudioTop from './ourStudio/studioTop';
import StudioBottom from './ourStudio/studioBottom';

export default function StudioMain() {
  return (
    <Container maxWidth="lg">
      <Stack>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <StudioTop />
          </Box>
          <Box>
            <StudioBottom />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
