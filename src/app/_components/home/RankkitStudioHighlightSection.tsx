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
import VideoCameraFrontRoundedIcon from "@mui/icons-material/VideoCameraFrontRounded";

export default function RankkitStudioHighlightSection() {
  return (
    <Box
      id="rankkit-studio"
      component="section"
      sx={{
        py: { xs: 6, sm: 7, md: 8 },
        scrollMarginTop: 96,
        background: `
          linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95)),
          radial-gradient(600px 300px at 80% 20%, rgba(59,130,246,0.25), transparent 60%)
        `,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
        >
          {/* LEFT: CONTENT */}
          <Grid item xs={12} md={8}>
            <Stack spacing={1.6} sx={{ maxWidth: 760 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.35)",
                    color: "#93c5fd",
                  }}
                >
                  <VideoCameraFrontRoundedIcon />
                </Box>

                <Typography
                  sx={{
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    fontSize: 12,
                    color: "#93c5fd",
                  }}
                >
                  CREATOR & PRODUCTION STUDIO
                </Typography>
              </Stack>

              <Typography
                component="h2"
                sx={{
                  fontWeight: 950,
                  fontSize: { xs: 22, sm: 26, md: 30 },
                  lineHeight: 1.25,
                }}
              >
                We Also Have Our Own Production Studio — RankKit Studio
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: { xs: 14.5, sm: 15.5 },
                  lineHeight: 1.9,
                }}
              >
                RankKit Studio is a professional content creation space where we shoot
                podcasts, Instagram reels, YouTube videos, interviews, brand campaigns,
                and production content. Having an in-house studio allows us to execute
                faster, maintain quality control, and create performance-driven content
                that aligns perfectly with your marketing strategy.
              </Typography>
            </Stack>
          </Grid>

          {/* RIGHT: CTA */}
          <Grid item xs={12} md={4}>
            <Stack
              spacing={1.2}
              sx={{
                bgcolor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 2,
                p: { xs: 2.25, sm: 2.75 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: 16,
                }}
              >
                Shoot. Create. Publish.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14.5,
                  lineHeight: 1.8,
                }}
              >
                A dedicated studio for creators, brands, and businesses looking
                for high-quality video and visual production.
              </Typography>

              <Button
                variant="contained"
                href="https://rankkitstudio.com" // replace if needed
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 1,
                  bgcolor: "#3b82f6",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 900,
                  borderRadius: 2,
                  py: 1.1,
                  "&:hover": {
                    bgcolor: "#2563eb",
                  },
                }}
              >
                Visit RankKit Studio Website
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
