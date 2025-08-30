'use client';

import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import webIcon from '@/assets/images/services-logo/webIcon.png';
import brandingIcon from '@/assets/images/services-logo/brandingIcon.png';
import creatorNestIcon from '@/assets/images/services-logo/creatorNestIcon.png';
import mediaIcon from '@/assets/images/services-logo/mediaIcon.png';
import seoIcon from '@/assets/images/services-logo/seoIcon.png';
import digiMarkIcon from '@/assets/images/services-logo/digiMarkIcon.png';
import Link from 'next/link';

const serviceCards = [
  {
    title: ['Website', 'Development'],
    icon: webIcon,
    href: '/services/web-development',
    description:
      'We engineer digital platforms that reflect your brand, engage your audience, and drive measurable business outcomes. From custom-coded builds to seamless CMS and e-commerce setups, every site we deliver is fast, functional, and future-ready.',
  },
  {
    title: ['Branding &', 'Multimedia'],
    icon: brandingIcon,
    href: '/services/branding-and-multimedia',
    description:
      'Your brand isn’t just a logo. It’s the story people remember. We craft cohesive visual identities that make your brand stand out – from logos and typography to packaging and social media. Every detail we design builds recognition and trust at every touchpoint.',
  },
  {
    title: ['CreatorNest', '(Exclusive)'],
    icon: creatorNestIcon,
    href: '/services/creator-nest',
    description:
      'Whether you’re starting from scratch or stuck at 10K – CreatorNest gives you everything to build a personal brand. From strategy to shoot, we help you create, grow, and monetize your content with clarity and confidence.',
  },
  {
    title: ['Media', 'Production'],
    icon: mediaIcon,
    href: '/services/media-production',
    description:
      'Your visuals are your brand’s first impression. We produce scroll-stopping content — from studio shoots and reels to podcast setups and ad films. Every frame is shot with intention, creativity, and conversion in mind.',
  },
  {
    title: ['SEO', 'Services'],
    icon: seoIcon,
    href: '/services/seo-services',
    description:
      'Visibility starts with search. We help your brand rank higher on Google, drive organic traffic, and convert leads — without relying solely on ads. Our SEO strategies are rooted in research, optimized for performance, and built for long-term growth.',
  },
  {
    title: ['Digital', 'Marketing'],
    icon: digiMarkIcon,
    href: '/services/digital-marketing',
    description:
      'We blend creativity with conversion. From Meta to Google, our performance-driven campaigns are built to engage, convert, and scale. Backed by strategy and data, we don’t just run ads — we run results-focused growth engines.',
  },
];

const gaps = {
  xs: {
    min1: '7px',
    min: '10px',
    med: '16.18px',
    max: '26.06px',
  },
  md: {
    min1: '9px',
    min: '13px',
    med: '19px',
    max: '29.06px',
  },
};

export default function OurServicesCards() {
  return (
    <Box sx={{ paddingBlock: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid size={12}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 600, color: 'error.main', marginBlockEnd: { xs: '30px', md: 4 } }}
          >
            Our{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Services
            </Box>
          </Typography>
        </Grid>
        <Grid container spacing={{ xs: gaps.xs.max, md: gaps.md.max }}>
          {serviceCards.map((card) => (
            <Grid
              component={Link}
              href={card.href}
              sx={{ textDecoration: 'none' }}
              size={{ xs: 12, sm: 6, md: 4 }}
              key={card.title[0]}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'grey.200',
                  p: 3,
                  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #00000066',
                  display: 'flex',
                  flexDirection: 'column',
                  // justifyContent: 'space-between',
                  gap: gaps.md.med,
                  height: { sm: 1 },
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #FC5A4A 0%, #021266 100%)',
                    scale: '1.03',
                    '& *': {
                      color: '#fff',
                      filter: 'brightness(0) invert(1)',
                    },
                  },
                }}
              >
                <Box>
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    rowGap={{ xs: 1, md: 1 }}
                    columnGap={{ xs: 1, md: 1.5 }}
                  >
                    <Box position="relative">
                      <Image
                        src={card.icon}
                        alt="icon"
                        //   fill
                        height={75}
                        width={75}
                        style={{ width: 60, height: 60 }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      sx={{ lineHeight: 1.2, color: 'primary.main' }}
                    >
                      {card.title[0]} <Box sx={{ color: 'error.main' }}>{card.title[1]}</Box>
                    </Typography>
                  </Stack>
                </Box>

                <Typography variant="body1" sx={{ color: 'grey.900' }}>
                  {card.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
