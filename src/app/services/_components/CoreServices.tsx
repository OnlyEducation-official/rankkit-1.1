'use client';

import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { Globe, Palette, Users, Video, Search, TrendingUp, LucideProps } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import CoreServiceCards from './CoreServiceCards';
import { servicePages } from '../[slug]/page';

export type MultiServices = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  title: string;
  href: servicePages;
  color: string;
  bgColor: string;
  description: string;
  badge?: string;
};

const services: MultiServices[] = [
  {
    icon: Globe,
    title: 'Website Development',
    href: 'web-development',
    color: 'linear-gradient(135deg, #021266 0%, rgba(2, 18, 102, 0.8) 100%)',
    bgColor: 'rgba(2, 18, 102, 0.1)',
    description:
      'We engineer digital platforms that reflect your brand, engage your audience, and drive measurable business outcomes. From custom-coded builds to seamless CMS and e-commerce setups, every site we deliver is fast, functional, and future-ready.',
  },
  {
    icon: Palette,
    title: 'Branding & Multimedia',
    href: 'branding-and-multimedia',
    color: 'linear-gradient(135deg, #021266 0%, rgba(2, 18, 102, 0.8) 100%)',
    bgColor: 'rgba(2, 18, 102, 0.1)',
    description:
      "Your brand isn't just a logo. It's the story people remember. We craft cohesive visual identities that make your brand stand out — from logos and typography to packaging and social media. Every detail builds recognition and trust.",
  },
  {
    icon: Users,
    title: 'CreatorNest',
    href: 'creator-nest',
    badge: 'Exclusive',
    color: 'linear-gradient(135deg, #e62d3e 0%, rgba(230, 45, 62, 0.8) 100%)',
    bgColor: 'rgba(230, 45, 62, 0.1)',
    description:
      "Whether you're starting from scratch or stuck at 10K – CreatorNest gives you everything to build a personal brand. From strategy to shoot, we help you create, grow, and monetize your content with clarity and confidence.",
  },
  {
    icon: Video,
    title: 'Media Production',
    href: 'media-production',
    color: 'linear-gradient(135deg, #021266 0%, rgba(2, 18, 102, 0.8) 100%)',
    bgColor: 'rgba(2, 18, 102, 0.1)',
    description:
      "Your visuals are your brand's first impression. From studio shoots and reels to podcast setups and ad films — we shoot with strategy, creativity, and performance in mind.",
  },
  {
    icon: Search,
    title: 'SEO Services',
    href: 'seo-services',
    color: 'linear-gradient(135deg, #021266 0%, rgba(2, 18, 102, 0.8) 100%)',
    bgColor: 'rgba(2, 18, 102, 0.1)',
    description:
      'Visibility starts with search. Our SEO strategies help you rank higher on Google and convert traffic into leads — all through organic growth, research-driven keywords, and high-performance content.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    href: 'digital-marketing',
    color: 'linear-gradient(135deg, #e62d3e 0%, rgba(230, 45, 62, 0.8) 100%)',
    bgColor: 'rgba(230, 45, 62, 0.1)',
    description:
      "We don't just run ads. We run full-stack growth campaigns across Meta, Google, and more — designed to engage, convert, and scale.",
  },
];

export default function CoreServices() {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
        // position: 'relative',
        // overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: '44px',
              fontWeight: 700,
              mb: 3,
              color: 'primary.main',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
              fontFamily: 'var(--font-clash-?display, sans-serif)',
              // animation: 'slideInFromTop 1s ease forwards',
            }}
          >
            Our Core Services
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              color: 'rgba(0, 0, 0, 0.7)',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            Comprehensive solutions designed to elevate your brand and drive measurable growth
            across every digital touchpoint.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={uuidv4()} sx={{ display: 'flex' }}>
              <CoreServiceCards service={service} index={index} IconComponent={service.icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
