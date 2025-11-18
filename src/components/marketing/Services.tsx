/* eslint-disable react/no-array-index-key */

'use client';

import { Grid, Typography } from '@mui/material';
import { Link } from 'react-scroll';

export default function MarketingServices() {
  const services = [
    {
      name: 'Website Development',
      content:
        'We build high-performance digital platforms that reflect your brand, engage your audience, and deliver measurable results. From custom-coded websites to seamless CMS and e-commerce solutions, every website we create is fast, functional, and future-ready.',
      image: 'https://marketing.buzzzworth.com/image/service2.svg',
    },
    {
      name: 'Branding & Multimedia',
      content:
        'Your brand is more than a logo — it’s the story people remember. We craft visual identities that build trust and recognition, including logos, typography, packaging, and social media design. Every detail is purpose-driven to strengthen your brand across all touchpoints.',
      image: 'https://marketing.buzzzworth.com/image/service4.svg',
    },
    {
      name: 'CreatorsNest (Exclusive)',
      content:
        "Whether you're starting from scratch or scaling your personal brand, CreatorsNest equips you with everything you need — from strategy and scripting to shoots and monetization. We help you create meaningful content with clarity, confidence, and authenticity.",
      image: 'https://marketing.buzzzworth.com/image/service6.svg',
    },
    {
      name: 'Digital Marketing',
      content:
        'We combine creativity with data to deliver campaigns that convert. From Meta to Google, our performance-driven strategies are designed to engage, scale, and drive revenue. We don’t just run ads — we build consistent, results-focused growth engines.',
      image: 'https://marketing.buzzzworth.com/image/service5.svg',
    },
    {
      name: 'Media Production',
      content:
        'Your visuals are your brand’s first impression. We produce cinematic, scroll-stopping content — from studio shoots and corporate films to reels, podcasts, and advertisements. Every frame is crafted to inspire emotion, creativity, and conversions.',
      image: 'https://marketing.buzzzworth.com/image/service3.svg',
    },
    {
      name: 'SEO Services',
      content:
        'Visibility begins with search. Our research-driven SEO strategies help you rank higher on Google, grow organic traffic, and convert leads without relying solely on ads. We optimize for performance, authority, and long-term sustainable growth.',
      image: 'https://marketing.buzzzworth.com/image/service1.png',
    },
  ];

  return (
    <Grid container spacing={2} display="grid" sx={{}}>
      <Grid
        size={{ xs: 12 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '45px',
          }}
        >
          GET A FREE CONSULTATION
        </Typography>
      </Grid>

      <Grid container spacing={2} size={{ xs: 12 }} sx={{ marginTop: '50px' }}>
        {services.map((s, i) => (
          <Grid
            key={i}
            size={{ xs: 12, md: 4 }}
            sx={{
              border: '1px solid #e1e3e8',
              backgroundColor: '#fff',
              padding: '71px 25px 57px 25px',
              gap: 24,
              borderRadius: '24px',
              position: 'relative',
            }}
          >
            <Typography
              sx={{
                position: 'absolute',
                overflowClipMargin: 'content-box',
                overflow: 'clip',
                top: 0,
                right: 0,
                zIndex: 1,
              }}
            >
              <img src={s.image} alt={s.name} />
            </Typography>
            <Typography variant="h4">
              <Typography
                variant="inherit"
                sx={{
                  fontSize: '20px',
                  color: '#000',
                  fontWeight: 600,
                  lineHeight: '28px',
                  width: 0.75,
                  textTransform: 'capitalize',
                }}
              >
                {s.name}
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                color: '#3d4c5e',
                fontSize: '14px',
                fontWeight: 400,
                width: 0.75,
                zIndex: 2,
              }}
            >
              {s.content}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          component={Link}
          to="banner"
          smooth
          variant="button"
          sx={{
            backgroundColor: '#ff0000',
            color: '#fff',
            borderRadius: '71px',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '15px',
            fontWeight: 600,
            height: '60px',
            maxWidth: '300px',
            width: '100%',
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
            cursor: 'pointer',
          }}
        >
          GET IN TOUCH
        </Typography>
      </Grid>
    </Grid>
  );
}
