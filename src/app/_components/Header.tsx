'use client';

import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logo1.jpg';
import Link from 'next/link';
import SidebarDrawer from './Drawer';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 600px)');
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
          borderBottomLeftRadius: { sm: '25px' },
          borderBottomRightRadius: { sm: '25px' },
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

            {/* Drawer for mobile */}
            {isMobile && <SidebarDrawer />}
            {/* Nav Items from tablet */}
            {!isMobile && (
              <Stack direction="row" spacing={4} alignItems="center">
                <Typography variant="body2">About</Typography>
                <Typography variant="body2">Services</Typography>
                <Typography variant="body2">Case Studies</Typography>
                <Button
                  LinkComponent={Link}
                  href="/contact-us"
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
            )}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
