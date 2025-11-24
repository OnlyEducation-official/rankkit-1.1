// components/BrandCta.tsx

'use client';

import { Box, Button, Container, Typography } from '@mui/material';

export default function BrandCta() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            borderRadius: { xs: 3, md: 4 },
            textAlign: 'center',
            px: { xs: 3, md: 8 },
            py: { xs: 4, md: 6 },
            background: 'linear-gradient(90deg, #eef2ff 0%, #f9fafb 50%, #f5f3ff 100%)',
            boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
            width: '100%',
          }}
        >
          {/* Heading */}
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.6rem', md: '2.1rem' },
              fontWeight: 800,
              color: '#111827',
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Ready to Scale Your Brand?
          </Typography>

          {/* Sub text */}
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', md: '1rem' },
              color: 'text.secondary',
              maxWidth: 520,
              mx: 'auto',
            }}
          >
            Let&apos;s build something extraordinary together. Contact us today to get started on
            your next project.
          </Typography>

          {/* CTA button */}
          <Button
            variant="contained"
            sx={{
              mt: { xs: 3, md: 4 },
              px: { xs: 3.5, md: 5 },
              py: { xs: 1.1, md: 1.3 },
              borderRadius: 999,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', md: '1rem' },
              backgroundColor: '#2563eb',
              '&:hover': {
                backgroundColor: '#1d4ed8',
              },
            }}
          >
            Contact Us!
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
