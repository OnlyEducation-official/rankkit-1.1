'use client';

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import React, { Suspense } from 'react';
import logo from '@/assets/images/logo2.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarDrawer from './Drawer';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const pathname = usePathname();

  return (
    <Stack sx={{ display: 'flex', alignItems: 'center' }}>
      <Container
        // component={Container}
        maxWidth="lg"
        sx={{
          backgroundColor: 'common.white',
          backdropFilter: 'blur(10px)',
          boxShadow: '3px 2px 7px rgba(0, 0, 0, 0.3)',
          position: 'fixed',
          top: 0,
          // width: { xs: 1, md: '80%' },
          py: 3,
          zIndex: 1000,
          paddingInline: 2,
          borderBottomLeftRadius: { sm: '16px' },
          borderBottomRightRadius: { sm: '16px' },
        }}
      >
        {/* <Container maxWidth="lg" sx={{ maxWidth: { xs: '100%', md: 'auto' } }}> */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component={Link}
              href="/"
              sx={{ position: 'relative', width: '135px', aspectRatio: 4.2 / 1 }}
            >
              <Image src={logo} fill alt="RankKit Logo" style={{ objectFit: 'contain' }} />
            </Box>
          </Stack>
          <Suspense fallback={<CircularProgress />}>
            {/* Drawer for mobile */}
            {isMobile && <SidebarDrawer />}
            {/* Nav Items from tablet */}
            {!isMobile && (
              <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                <Typography
                  variant="body1"
                  component={Link}
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'none',
                      // color: 'inherit',
                    },
                    color: pathname === '/' ? 'primary.main' : 'common.black',
                    fontWeight: pathname === '/' ? 600 : 500,
                  }}
                >
                  Home
                </Typography>
                <DropdownMenu
                  lists={[
                    { text: 'Web development', href: '/services/web-development' },
                    { text: 'Branding & Multimedia', href: '/services/branding-and-multimedia' },
                    { text: 'CreatorNest', href: '/services/creator-nest' },
                    { text: 'Media Production', href: '/services/media-production' },
                    { text: 'SEO Services', href: '/services/seo-services' },
                    { text: 'Digital Marketing', href: '/services/digital-marketing' },
                    { text: 'Social Media Management', href: '/services/social-media-management' },
                  ]}
                  // label="Industries"
                />
                {/* <Badge
                  slotProps={{
                    badge: {
                      sx: {
                        bgcolor: 'error.main',
                        fontWeight: 600,
                        color: 'common.white',
                        marginBlockStart: '-5px',
                        fontSize: '11px',
                      },
                    },
                  }}
                  badgeContent="new"
                > */}
                <Typography
                  variant="body1"
                  component={Link}
                  href="/studio"
                  sx={{
                    textDecoration: 'none',
                    color: pathname === '/studio' ? 'primary.main' : 'common.black',
                    fontWeight: pathname === '/studio' ? 600 : 500,
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'none',
                      color: pathname === '/studio' ? 'primary.main' : 'common.black',
                    },
                  }}
                >
                  Studio
                </Typography>
                {/* </Badge> */}
                <Button
                  LinkComponent={Link}
                  href="/contact-us"
                  variant="contained"
                  sx={{
                    bgcolor: 'black',
                    borderRadius: 3,
                    px: 3.5,
                    py: 1.25,
                    typography: 'body1',
                    fontWeight: 600,
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
          </Suspense>
        </Stack>

        {/* </Container> */}
      </Container>
    </Stack>
  );
}
