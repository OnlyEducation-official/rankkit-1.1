"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, sm: 10 },
        pb: { xs: 6, sm: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 32, sm: 44, md: 52 },
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            Digital Marketing Agency for SEO, Website Development & Influencer
            Growth
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: "text.secondary",
              lineHeight: 1.7,
            }}
          >
            We help brands generate leads and sales using{" "}
            <strong>performance marketing</strong>, <strong>SEO services</strong>
            , <strong>high-converting websites</strong>, and{" "}
            <strong>influencer marketing</strong>—built for measurable ROI, not
            vanity metrics.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              size="large"
              variant="contained"
              href="#contact"
              sx={{ px: 3, py: 1.2 }}
            >
              Book a Free Strategy Call
            </Button>
            <Button
              size="large"
              variant="outlined"
              href="#services"
              sx={{ px: 3, py: 1.2 }}
            >
              Explore Services
            </Button>
          </Stack>

          <Typography
            component="p"
            sx={{
              fontSize: 13,
              color: "text.secondary",
            }}
          >
            Trusted by startups, local businesses, and growing brands across
            India.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
