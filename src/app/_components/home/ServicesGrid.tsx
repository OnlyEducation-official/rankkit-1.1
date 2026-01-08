'use client';

import * as React from 'react';
import { Box, Container, Grid, Stack, Typography, Button, Chip, useTheme } from '@mui/material';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

type Service = {
  title: string;
  desc: string;
  points: string[];
  icon: React.ReactNode;
  tags: string[];
};

const services: Service[] = [
  {
    title: 'Performance Digital Marketing',
    desc: 'ROI-focused campaigns across Google Ads and Meta to generate qualified leads, sales, and predictable growth.',
    points: [
      'Full-funnel strategy',
      'Ads + landing page optimization',
      'Tracking, CRO & reporting',
    ],
    icon: <CampaignRoundedIcon />,
    tags: ['Google Ads', 'Meta Ads', 'Lead Gen'],
  },
  {
    title: 'SEO Services',
    desc: 'Technical + content SEO to improve rankings, organic traffic, and long-term brand authority for high-intent searches.',
    points: ['Technical & on-page SEO', 'Keyword & content roadmap', 'Authority building'],
    icon: <SearchRoundedIcon />,
    tags: ['Local SEO', 'Technical SEO', 'Content'],
  },
  {
    title: 'Campaign Marketing',
    desc: 'Strategic campaigns designed to generate attention, engagement, and measurable business outcomes across digital platforms.',
    points: [
      'Campaign strategy & planning',
      'Creative execution across platforms',
      'Audience targeting & funnel alignment',
      'Real-time optimization & reporting',
    ],
    icon: <PeopleAltRoundedIcon />,
    tags: ['Multi-Channel', 'Performance', 'Conversions'],
  },
  {
    title: 'Brand Promotion',
    desc: 'Brand-led promotion that builds visibility, credibility, and long-term recall across digital and social channels.',
    points: [
      'Brand positioning & messaging',
      'Content-driven brand storytelling',
      'Platform-specific promotion strategies',
      'Reach, engagement & recall tracking',
    ],
    icon: <PeopleAltRoundedIcon />,
    tags: ['Brand Awareness', 'Visibility', 'Trust'],
  },
  {
    title: 'Website Development',
    desc: 'High-performing, mobile-first websites built for speed, SEO, and conversions—optimized for marketing outcomes.',
    points: ['UX-first UI design', 'Performance & Core Web Vitals', 'SEO-ready architecture'],
    icon: <LanguageRoundedIcon />,
    tags: ['Next.js', 'Node.js', 'Wordpress'],
  },
  {
    title: 'Influencer Marketing',
    desc: 'Creator collaborations that build trust, increase reach, and drive measurable engagement and conversions.',
    points: ['Creator discovery & vetting', 'Campaign execution', 'Performance tracking'],
    icon: <PeopleAltRoundedIcon />,
    tags: ['UGC', 'Creators', 'Brand Trust'],
  },
];

export default function ServicesSection() {
  const theme = useTheme();

  return (
    <Box
      id="services"
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        overflow: 'hidden',
        // subtle agency-style background
        background: `radial-gradient(900px 400px at 10% 10%, rgba(25,118,210,0.10), transparent 55%),
                     radial-gradient(700px 400px at 90% 30%, rgba(156,39,176,0.10), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
      }}
    >
      {/* decorative blur blobs */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -140,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.35,
          background: 'rgba(25,118,210,0.35)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: -160,
          right: -120,
          width: 360,
          height: 360,
          borderRadius: '50%',
          filter: 'blur(70px)',
          opacity: 0.25,
          background: 'rgba(156,39,176,0.30)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Header Row */}
        <Grid container spacing={3} alignItems="flex-end">
          <Grid size={12}>
            <Stack spacing={1.5}>
              <Chip
                label="Services"
                sx={{
                  alignSelf: 'flex-start',
                  fontWeight: 700,
                  borderRadius: 999,
                  border: '1px solid',
                  borderColor: 'rgba(25,118,210,0.25)',
                  bgcolor: 'rgba(25,118,210,0.08)',
                }}
              />

              <Typography
                component="h2"
                sx={{
                  fontWeight: 950,
                  letterSpacing: '-0.02em',
                  fontSize: { xs: 26, sm: 34, md: 40 },
                  lineHeight: 1.12,
                }}
              >
                Digital Marketing services built for{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  growth
                </Box>{' '}
                and{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  ROI
                </Box>
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 15.5, sm: 16.5 },
                  lineHeight: 1.8,
                  maxWidth: 820,
                }}
              >
                Choose a single service or combine them into a complete growth system. We help
                brands improve visibility, increase conversions, and build revenue using performance
                marketing, SEO, conversion-first websites, and influencer campaigns.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Cards */}
        <Grid container spacing={2.5} sx={{ mt: { xs: 3, sm: 4 } }}>
          {services.map((service) => (
            <Grid
              key={service.title}
              size={{
                xs: 12,
                sm: 6,
                lg: 4,
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  p: { xs: 2.5, sm: 3 },
                  border: '1px solid',
                  borderColor: 'rgba(0,0,0,0.10)',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.70))',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.06)',
                  transition:
                    'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: { md: 'translateY(-6px)' },
                    borderColor: 'rgba(25,118,210,0.35)',
                    boxShadow: { md: '0px 16px 42px rgba(0,0,0,0.10)' },
                  },
                }}
              >
                <Stack spacing={1.5} sx={{ height: '100%' }}>
                  {/* Icon + Title */}
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      aria-hidden
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 3,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'rgba(25,118,210,0.10)',
                        border: '1px solid',
                        borderColor: 'rgba(25,118,210,0.20)',
                        color: 'primary.main',
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 900,
                        fontSize: 18,
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Stack>

                  {/* Desc */}
                  <Typography
                    component="p"
                    sx={{
                      color: 'text.secondary',
                      fontSize: 14.75,
                      lineHeight: 1.8,
                    }}
                  >
                    {service.desc}
                  </Typography>

                  {/* Tags */}
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {service.tags.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          borderRadius: 999,
                          fontWeight: 700,
                          bgcolor: 'rgba(0,0,0,0.03)',
                          border: '1px solid',
                          borderColor: 'rgba(0,0,0,0.06)',
                        }}
                      />
                    ))}
                  </Stack>

                  {/* Points */}
                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      mt: 0.5,
                      mb: 0,
                      color: 'text.secondary',
                      '& li': { mb: 0.75 },
                    }}
                  >
                    {service.points.map((point) => (
                      <li key={point}>
                        <Typography component="span" sx={{ fontSize: 14 }}>
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </Box>

                  {/* CTA */}
                  <Box sx={{ mt: 'auto', pt: 1 }}>
                    <Button
                      variant="text"
                      href="#contact"
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        px: 0,
                        textTransform: 'none',
                        fontWeight: 800,
                        color: 'primary.main',
                        '&:hover': { bgcolor: 'transparent' },
                      }}
                    >
                      Get pricing & plan
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}

          {/* If you want exactly 3 per row on desktop: keep md=4.
              With 4 services, the 4th goes to next line — that’s normal.
              If you want 4-in-a-row on xl, you can add: xl={3} above. */}
        </Grid>

        {/* SEO helper text (hidden visually, readable for screen readers) */}
        <Typography
          component="p"
          sx={{
            position: 'absolute',
            left: -10000,
            top: 'auto',
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        >
          Digital marketing agency services including performance marketing, SEO services, website
          development, and influencer marketing to improve conversions and revenue.
        </Typography>
      </Container>
    </Box>
  );
}
