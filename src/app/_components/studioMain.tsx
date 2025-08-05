import { Box, Container, Stack } from '@mui/material';
import StudioTop from './ourStudio/studioTop';
import StudioBottom from './ourStudio/studioBottom';

export default function StudioMain() {
  return (
    <Container maxWidth="lg">
      <Stack sx={{ paddingBlockStart: 10 }}>
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
  );
}
