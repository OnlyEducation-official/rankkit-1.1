import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logo1.jpg';

export default function Header() {
  return (
    <Stack sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          backgroundColor: '#bebebe96',
          backdropFilter: 'blur(10px)',
          boxShadow: '3px 2px 7px rgba(0, 0, 0, 0.3)',
          position: 'fixed',
          top: 0,
          width: { xs: 1, md: '80%' },
          py: 2,
          zIndex: 1000,
          paddingInline: 2,
          borderBottomLeftRadius: { xs: '25px' },
          borderBottomRightRadius: { xs: '25px' },
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {/* Logo */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ position: 'relative', width: '95px', aspectRatio: 3.66 / 1 }}>
                <Image src={logo} alt="RankKit Logo" fill style={{ objectFit: 'contain' }} />
              </Box>
            </Stack>

            {/* Nav Items */}
            <Stack direction="row" spacing={4} alignItems="center">
              <Typography variant="body2">About</Typography>
              <Typography variant="body2">Services</Typography>
              <Typography variant="body2">Case Studies</Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'black',
                  borderRadius: 2,
                  px: 1,
                  py: 0.5,
                  fontSize: '13px',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#333',
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
