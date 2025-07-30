import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function WhyRankkit() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h1" fontWeight={600} sx={{ color: 'primary.main' }}>
              Why
              <Box component="span" sx={{ color: 'error.main' }}>
                {' '}
                Rankkit
              </Box>
            </Typography>
            <Box>
              <Typography variant="h2" fontWeight={600} sx={{ color: 'primary.main' }}>
                Unlock the Power of
              </Typography>
              <Typography variant="h2" fontWeight={600} sx={{ color: 'error.main' }}>
                Full-Suite Digital Innovation
              </Typography>
              <Typography variant="body1">
                {`At RankKit, we don't just deliver services — we engineer transformations. As a
              full-service digital agency, we bring together branding, technology, marketing, and
              media under one roof to help businesses grow with purpose and performance. From
              high-converting websites to influencer-led content strategies, our work is driven by
              strategy, crafted with creativity, and executed with precision. `}
              </Typography>
              <Typography variant="body1">
                We collaborate with startups, personal brands, and large enterprises to unlock
                growth across every digital touchpoint — delivering measurable ROI, industry
                credibility, and long-term brand value.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
                paddingInline: 4,
                paddingBlock: 5,
                backdropFilter: 'blur(50px)',
              }}
            >
              <Stack direction="row" gap={2}>
                <Image alt="icons" src="" width={50} height={50} style={{ aspectRatio: '1/1' }} />
                <Typography variant="h5" fontWeight={500}>
                  End-to-end solutions
                </Typography>
              </Stack>
              <Typography variant="body1">
                We don’t just build campaigns; we create ecosystems.
              </Typography>
              <Typography variant="body1">
                From branding to development, marketing, and analytics, our integrated approach
                ensures every part of your digital presence works in perfect harmony to generate
                measurable impact.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
