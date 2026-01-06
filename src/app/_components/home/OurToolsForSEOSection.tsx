"use client";

import * as React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

type ToolLogo = {
  name: string;
  src: string; // upload these in /public/images/tools/...
  alt: string;
  width?: number; // optional fine-tune
  height?: number; // optional fine-tune
};

const tools: ToolLogo[] = [
  {
    name: "SEMrush",
    src: "/images/tools/semrush.png",
    alt: "SEMrush SEO tool logo",
  },
  {
    name: "SE Ranking",
    src: "/images/tools/se-ranking.png",
    alt: "SE Ranking SEO tool logo",
  },
  {
    name: "Screaming Frog",
    src: "/images/tools/screaming-frog.png",
    alt: "Screaming Frog SEO Spider logo",
  },
  {
    name: "Ubersuggest",
    src: "/images/tools/ubersuggest.png",
    alt: "Ubersuggest SEO tool logo",
  },
  {
    name: "Google Analytics",
    src: "/images/tools/google-analytics.png",
    alt: "Google Analytics logo",
  },
  {
    name: "Google Tag Manager",
    src: "/images/tools/google-tag-manager.png",
    alt: "Google Tag Manager logo",
  },
];

export default function OurToolsForSEOSection() {
  return (
    <Box
      id="our-tools"
      component="section"
      sx={{
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        bgcolor: "#DFF0FF", // light blue like your reference
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            component="h2"
            sx={{
              fontWeight: 950,
              fontSize: { xs: 28, sm: 36, md: 44 },
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "text.primary",
            }}
          >
            Our Tools for SEO
          </Typography>

          {/* Orange underline like reference */}
          <Box
            aria-hidden
            sx={{
              width: "100%",
              maxWidth: 980,
              height: 2,
              borderRadius: 999,
              bgcolor: "#F39C34",
              opacity: 0.95,
            }}
          />

          <Typography
            component="p"
            sx={{
              maxWidth: 980,
              color: "rgba(0,0,0,0.72)",
              fontSize: { xs: 15.5, sm: 16.5 },
              lineHeight: 1.85,
              px: { xs: 1, sm: 0 },
            }}
          >
            Search Engine Optimization becomes more accurate with the right tool stack.
            We use trusted SEO and analytics tools to audit websites, track rankings,
            measure performance, and improve visibility with reliable data.
          </Typography>
        </Stack>

        {/* Logos */}
        <Grid
          container
          spacing={{ xs: 2.5, sm: 3 }}
          sx={{ mt: { xs: 3, sm: 4 } }}
          alignItems="center"
          justifyContent="center"
        >
          {tools.map((t) => (
            <Grid key={t.name} item xs={6} sm={4}>
              <Box
                sx={{
                  height: { xs: 76, sm: 92 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  // clean, minimal "logo tile" feel (no heavy card)
                  bgcolor: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0px 10px 26px rgba(0,0,0,0.06)",
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                  "&:hover": {
                    transform: { sm: "translateY(-3px)" },
                    boxShadow: { sm: "0px 14px 34px rgba(0,0,0,0.10)" },
                  },
                }}
              >
                {/* Keep logos consistent size */}
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 150, sm: 190 },
                    height: { xs: 38, sm: 46 },
                    filter: "grayscale(0%)",
                    opacity: 0.98,
                  }}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 600px) 150px, 190px"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* SEO helper (screen readers only) */}
        <Typography
          component="p"
          sx={{
            position: "absolute",
            left: -10000,
            top: "auto",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          SEO tools used for technical SEO audits, keyword research, rank tracking, analytics,
          and tag management including SEMrush, SE Ranking, Screaming Frog, Ubersuggest,
          Google Analytics, and Google Tag Manager.
        </Typography>
      </Container>
    </Box>
  );
}
