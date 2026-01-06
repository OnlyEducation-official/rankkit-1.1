"use client";

import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";

export default function HowSeoWorksSection() {
  return (
    <Box
      id="how-seo-works"
      component="section"
      sx={{
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        background: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          {/* LEFT: IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 10",
                borderRadius: 5,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.08)",
                boxShadow: "0px 16px 40px rgba(0,0,0,0.08)",
              }}
            >
              {/* Replace src with your actual image */}
              <Image
                src="/images/seo-process.png"
                alt="How SEO services work to improve search rankings and traffic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={false}
              />
            </Box>
          </Grid>

          {/* RIGHT: CONTENT */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{ maxWidth: 560 }}>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 950,
                  fontSize: { xs: 24, sm: 30, md: 34 },
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                How Do SEO Services Work?
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: 15.5, sm: 16.5 },
                  lineHeight: 1.85,
                }}
              >
                SEO works by improving how search engines understand, trust, and
                rank your website. The process starts with auditing your site and
                identifying technical issues, keyword opportunities, and content
                gaps. Based on this data, pages are optimized for search intent,
                site performance is improved, and authority signals are built
                over time.
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: 15.5, sm: 16.5 },
                  lineHeight: 1.85,
                }}
              >
                Unlike paid ads, SEO compounds gradually. As rankings improve,
                your website attracts consistent, high-intent organic traffic—
                resulting in better visibility, qualified leads, and long-term
                growth.
              </Typography>

              <Box sx={{ pt: 1 }}>
                <Button
                  size="large"
                  variant="contained"
                  href="#contact"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 999,
                    px: 3,
                    py: 1.25,
                  }}
                >
                  Get a Quote
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* SEO helper (screen readers only) */}
        <Typography
          component="p"
          sx={{
            position: "absolute",
            left: -10000,
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          How SEO services work to improve search engine rankings, organic traffic,
          website visibility, and lead generation using technical SEO, content
          optimization, and authority building.
        </Typography>
      </Container>
    </Box>
  );
}
