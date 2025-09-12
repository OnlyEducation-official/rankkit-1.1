import { Box, Button, Container, Divider, IconButton, Typography } from '@mui/material';
import { Instagram, Facebook } from '@mui/icons-material';
import Image from 'next/image';
import logo from '@/assets/images/logo2.png';
import Link from 'next/link';
// import uuid
import { v4 as uuid } from 'uuid';

const quickLinks = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Services',
    href: '/services',
  },
  {
    text: 'Studio',
    href: '/studio',
  },
  {
    text: 'Contact us',
    href: '/contact-us',
  },
  {
    text: 'Articles',
    href: '/articles',
  },
];

const serviceLinks = [
  { text: 'Web Development', href: '/services/web-development' },
  { text: 'Branding & Multimedia', href: '/services/branding-and-multimedia' },
  { text: 'CreatorsNest', href: '/services/creator-nest' },
  { text: 'Media Production', href: '/services/media-production' },
  { text: 'SEO Services', href: '/services/seo-services' },
  { text: 'Digital Marketing', href: '/services/digital-marketing' },
  { text: 'Social Media Management', href: '/services/social-media-management' },
];

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
                  gap: '5px',
                }}
              >
                {/* wrap icon into icon button */}
                <IconButton
                  LinkComponent={Link}
                  href="https://www.instagram.com/rankkitofficial/"
                  sx={{ color: 'common.black', padding: 0.5, paddingInlineStart: 0 }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  LinkComponent={Link}
                  href="https://www.facebook.com/people/RankKit/61576721577718/"
                  sx={{ color: 'common.black', padding: 0.5 }}
                >
                  <Facebook />
                </IconButton>
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
              {quickLinks.map((item) => (
                <Typography
                  component={Link}
                  href={item.href}
                  key={uuid()}
                  sx={{ textDecoration: 'none', color: 'common.black' }}
                >
                  {item.text}
                </Typography>
              ))}
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
              {serviceLinks.map((item) => (
                <Typography
                  component={Link}
                  href={item.href}
                  key={uuid()}
                  sx={{ textDecoration: 'none', color: 'common.black' }}
                >
                  {item.text}
                </Typography>
              ))}
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
              <Button
                variant="text"
                href="tel:919768372038"
                sx={{
                  textDecoration: 'none',
                  color: 'common.black',
                  // padding: 0,
                  display: 'block !important',
                  // textAlign: 'left',
                  // width: 1,
                  padding: '0px !important',
                  fontSize: 16,
                  '&: hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                +91 - 9090434376
              </Button>
              <Typography
                component="a"
                href="mailto:rankkitmedia@gmail.com?subject=Inquiry&body=I would like to know your services,"
                sx={{ textDecoration: 'none', color: 'common.black' }}
              >
                rankkitmedia@gmail.com
              </Typography>
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
