import { Box, Container, Divider, Typography } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import Image from 'next/image';
import logo from '@/assets/images/logo2.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#bebebe96',
        color: 'black',
        padding: '20px',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around',
          }}
        >
          <Box sx={{ maxWidth: '300px', marginTop: '20px' }}>
            <Box display="flex" flexDirection="column" sx={{ gap: '16px', fontWeight: 'normal' }}>
              <Box
                sx={{ position: 'relative', width: '185px', aspectRatio: 4.2 / 1 }}
                component={Link}
                href="/"
              >
                <Image src={logo} fill alt="RankKit Logo" style={{ objectFit: 'contain' }} />
              </Box>

              <Typography variant="body1">Cinematic content Meets Digital Strategy</Typography>
              <Typography variant="body1">
                We combine storytelling and data-driven marketing to elevate your brand.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '20px',
                }}
              >
                <Instagram /> <Facebook /> <Twitter />
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: { xs: '20px' } }}>
            <Typography fontWeight="bold">Quick Links</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                listStyleType: 'none',
                gap: { xs: '10px', md: '20' },
                marginTop: { xs: '5px', md: '10' },
              }}
            >
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
            </Box>
          </Box>
          <Box sx={{ marginTop: { xs: '20px' }, maxWidth: '300px' }}>
            <Typography fontWeight="bold">Services</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                listStyleType: 'none',
                gap: { xs: '10px', md: '20' },
                marginTop: { xs: '5px', md: '10' },
              }}
            >
              <li>Web Developement</li>
              <li>Digital Marketing</li>
              <li>Branding & Multimedia</li>
              <li>CreatorNest</li>
            </Box>
          </Box>
          <Box sx={{ marginTop: { xs: '20px' }, maxWidth: '273px' }}>
            <Typography fontWeight="bold">Contact</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                listStyleType: 'none',
                gap: { xs: '10px', md: '20' },
                marginTop: { xs: '5px', md: '10' },
              }}
            >
              <li>
                {' '}
                Ambience Court, 1702-1703, Phase 2, Sector 19E, Vashi, Navi Mumbai, Maharashtra
                400703
              </li>
              <li>+91 - 9090434376</li>
              <li>info@rankkit.com</li>
              <li>Contact Us</li>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} /> {/* This adds the horizontal line */}
        <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="body1"> © 2025 RankKit - All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
