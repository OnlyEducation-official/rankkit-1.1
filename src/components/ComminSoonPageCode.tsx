'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.200',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          mb: 2,
        }}
      >
        Coming Soon
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          color: 'grey.400',
          maxWidth: 500,
          mb: 4,
        }}
      >
        We’re working hard to bring you something amazing. Stay tuned for updates!
      </Typography>

      <Button
        LinkComponent={Link}
        href="/"
        variant="contained"
        color="error"
        sx={{
          textTransform: 'none',
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: '30px',
        }}
      >
        Back to home
      </Button>
    </Box>
  );
}
