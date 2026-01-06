"use client";

import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

type CardItem = {
  title: string;
  desc: string;
  points: string[];
  icon: React.ReactNode;
  tag: string;
};

const cards: CardItem[] = [
  {
    title: "Lead Generation & Sales Funnels",
    desc: "Performance marketing campaigns built to generate qualified leads and consistent sales—optimized for ROI, not reach.",
    points: ["Funnel strategy & landing pages", "Meta + Google Ads setup", "Weekly optimization & scaling"],
    icon: <RocketLaunchRoundedIcon />,
    tag: "Lead + Revenue",
  },
  {
    title: "Paid Ads Optimization (Meta + Google)",
    desc: "Improve CTR, reduce CPL, and increase ROAS with structured testing, creative iteration, and conversion-focused targeting.",
    points: ["Ad account audit", "Creative testing framework", "Budget allocation & scaling"],
    icon: <AdsClickRoundedIcon />,
    tag: "Ads + ROAS",
  },
  {
    title: "Tracking, Analytics & Reporting",
    desc: "Clean measurement setup so every decision is driven by data—from clicks and leads to purchases and LTV.",
    points: ["Pixel + GA4 + events setup", "Dashboard reporting", "Conversion rate optimization insights"],
    icon: <AnalyticsRoundedIcon />,
    tag: "Data + Insights",
  },
];

export default function PerformanceMarketingNearYouSection() {
  return (
    <Box
      id="performance-marketing-near-you"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        overflow: "hidden",
        background: `radial-gradient(900px 420px at 12% 18%, rgba(25,118,210,0.12), transparent 55%),
                     radial-gradient(700px 420px at 90% 30%, rgba(34,197,94,0.10), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
      }}
    >
      {/* Decorative blur blobs */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -170,
          left: -160,
          width: 420,
          height: 420,
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.28,
          background: "rgba(25,118,210,0.42)",
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: -180,
          right: -160,
          width: 440,
          height: 440,
          borderRadius: "50%",
          filter: "blur(90px)",
          opacity: 0.22,
          background: "rgba(34,197,94,0.35)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* HEADER */}
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Stack spacing={1.6}>
              <Chip
                icon={<MyLocationRoundedIcon />}
                label="Near You • Local Growth Support"
                sx={{
                  alignSelf: "flex-start",
                  borderRadius: 2,
                  fontWeight: 800,
                  border: "1px solid",
                  borderColor: "rgba(25,118,210,0.25)",
                  bgcolor: "rgba(25,118,210,0.08)",
                }}
              />

              <Typography
                component="h2"
                sx={{
                  fontWeight: 950,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: 26, sm: 34, md: 42 },
                  lineHeight: 1.12,
                }}
              >
                Performance Based Digital Marketing Solutions{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Near You
                </Box>
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: 15.5, sm: 16.5 },
                  lineHeight: 1.85,
                  maxWidth: 820,
                }}
              >
                We help local businesses and growing brands drive measurable results—more
                leads, better conversions, and improved ROAS—using performance marketing,
                funnel strategy, and data-backed optimization.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
                <Button
                  size="large"
                  variant="contained"
                  href="#contact"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 850,
                    borderRadius: 2,
                    py: 1.2,
                  }}
                >
                  Get a free performance audit
                </Button>

                <Button
                  size="large"
                  variant="outlined"
                  href="#services"
                  sx={{
                    textTransform: "none",
                    fontWeight: 850,
                    borderRadius: 2,
                    py: 1.2,
                  }}
                >
                  Explore services
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Quick stats / highlights */}
            <Box
              sx={{
                borderRadius: 2,
                p: { xs: 2.25, sm: 2.75 },
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.10)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
              }}
            >
              <Stack spacing={1.25}>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Box
                    aria-hidden
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(25,118,210,0.10)",
                      border: "1px solid",
                      borderColor: "rgba(25,118,210,0.20)",
                      color: "primary.main",
                    }}
                  >
                    <TrendingUpRoundedIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                      Results-first execution
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                      Focus on CPL, ROAS, conversions
                    </Typography>
                  </Box>
                </Stack>

                <Divider sx={{ borderColor: "rgba(0,0,0,0.08)" }} />

                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Box
                    aria-hidden
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(34,197,94,0.10)",
                      border: "1px solid",
                      borderColor: "rgba(34,197,94,0.20)",
                      color: "success.main",
                    }}
                  >
                    <AnalyticsRoundedIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                      Clear tracking setup
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                      GA4 + events + dashboards
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* CARDS: 1 per row on small, 3 per row on large */}
        <Grid container spacing={2.5} sx={{ mt: { xs: 3, sm: 4 } }}>
          {cards.map((card) => (
            <Grid key={card.title} size={{
                xs:12,
                sm:6,
                lg:4
            }}>
              <Box
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  p: { xs: 2.5, sm: 3 },
                  border: "1px solid",
                  borderColor: "rgba(0,0,0,0.10)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.90), rgba(255,255,255,0.72))",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
                  transition:
                    "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                  "&:hover": {
                    transform: { md: "translateY(-6px)" },
                    borderColor: "rgba(25,118,210,0.35)",
                    boxShadow: { md: "0px 16px 42px rgba(0,0,0,0.10)" },
                  },
                }}
              >
                <Stack spacing={1.4} sx={{ height: "100%" }}>
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      aria-hidden
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "rgba(25,118,210,0.10)",
                        border: "1px solid",
                        borderColor: "rgba(25,118,210,0.20)",
                        color: "primary.main",
                        flex: "0 0 auto",
                      }}
                    >
                      {card.icon}
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 950,
                          fontSize: 17.5,
                          lineHeight: 1.2,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Chip
                        label={card.tag}
                        size="small"
                        sx={{
                          mt: 0.75,
                          borderRadius: 2,
                          fontWeight: 800,
                          bgcolor: "rgba(0,0,0,0.03)",
                          border: "1px solid",
                          borderColor: "rgba(0,0,0,0.06)",
                        }}
                      />
                    </Box>
                  </Stack>

                  <Typography
                    component="p"
                    sx={{
                      color: "text.secondary",
                      fontSize: 14.75,
                      lineHeight: 1.85,
                    }}
                  >
                    {card.desc}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      mt: 0.5,
                      mb: 0,
                      color: "text.secondary",
                      "& li": { mb: 0.75 },
                    }}
                  >
                    {card.points.map((p) => (
                      <li key={p}>
                        <Typography component="span" sx={{ fontSize: 14 }}>
                          {p}
                        </Typography>
                      </li>
                    ))}
                  </Box>

                  <Box sx={{ mt: "auto", pt: 1 }}>
                    <Button
                      variant="text"
                      href="#contact"
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        px: 0,
                        textTransform: "none",
                        fontWeight: 900,
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      Request pricing →
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* SEO helper (screen readers) */}
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
          Performance based digital marketing solutions near you including lead generation,
          paid ads optimization, conversion tracking, analytics, and ROI-focused growth marketing.
        </Typography>
      </Container>
    </Box>
  );
}
