/* eslint-disable react/no-array-index-key */
'use client'
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-scroll';

export default function MarketingServices() {
  const services = [
    {
      name: 'Paid Advertising',
      content:
        'Launch and scale high-impact ad campaigns across Google, Meta, and YouTube. We manage targeting, creative, bidding, and optimization to ensure your brand reaches the right audience at the right time.',
      image: 'https://marketing.buzzzworth.com/image/service1.png',
    },
    {
      name: 'PPC & Lead Generation',
      content:
        'Drive qualified leads instantly through performance-driven PPC campaigns. From keyword research to lead capture and budget optimization, we focus on measurable conversions and maximum ROI.',
      image: 'https://marketing.buzzzworth.com/image/service2.svg',
    },
    {
      name: 'Social Media & Creative',
      content:
        'Engage and connect with your audience on social media platforms with our result-driven SMM strategies.',
      image: 'https://marketing.buzzzworth.com/image/service3.svg',
    },
    {
      name: 'Media & Conversion Optimization',
      content:
        'Expand reach through display, native, and video media placements. Our team continually optimizes campaigns using data insights to increase conversions and reduce cost per result.',
      image: 'https://marketing.buzzzworth.com/image/service4.svg',
    },
    {
      name: 'SEO & Organic Growth',
      content:
        'Improve visibility and attract steady organic traffic with advanced SEO strategies. Our technical and on-page optimization enhances ranking, authority, and long-term brand performance.',
      image: 'https://marketing.buzzzworth.com/image/service5.svg',
    },
    {
      name: 'Content Strategy',
      content:
        'Unify your content, ads, and SEO under one strategy. We plan, create, and analyze campaigns end-to-end to deliver cohesive communication and measurable business growth.',
      image: 'https://marketing.buzzzworth.com/image/service6.svg',
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
          How Can We Help You ?
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
          to='banner' smooth
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
            cursor:"pointer"
          }}
        >
          GET IN TOUCH
        </Typography>
      </Grid>
    </Grid>
  );
}
