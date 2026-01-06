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
} from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function AIPoweredAgencySection() {
  return (
    <Box
      id="ai-marketing"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 7, sm: 9, md: 10 },
        overflow: "hidden",
        scrollMarginTop: 96,
        background: `radial-gradient(900px 420px at 12% 18%, rgba(25,118,210,0.12), transparent 55%),
                     radial-gradient(700px 420px at 90% 30%, rgba(156,39,176,0.10), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
      }}
    >
      {/* Decorative blur blobs */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -160,
          left: -140,
          width: 360,
          height: 360,
          borderRadius: "50%",
          filter: "blur(70px)",
          opacity: 0.32,
          background: "rgba(25,118,210,0.38)",
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: -180,
          right: -140,
          width: 420,
          height: 420,
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.24,
          background: "rgba(156,39,176,0.32)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={4} alignItems="center">
          {/* LEFT: Copy */}
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Chip
                icon={<AutoAwesomeRoundedIcon />}
                label="AI-Powered Digital Marketing Agency"
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
                Faster decisions. Smarter campaigns.{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Better ROI.
                </Box>
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: 15.5, sm: 16.5 },
                  lineHeight: 1.85,
                  maxWidth: 720,
                }}
              >
                We combine human strategy with AI-assisted execution to scale
                performance marketing, SEO, websites, and content. The result is
                quicker experimentation, clearer insights, and campaigns that
                improve week after week—built for measurable growth, not vanity
                metrics.
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
                  Get a free AI growth audit
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

              {/* SEO helper text (screen readers) */}
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
                AI-powered digital marketing agency offering performance marketing, SEO
                services, website development, and influencer marketing for lead generation,
                conversions, and ROI.
              </Typography>
            </Stack>
          </Grid>

          {/* RIGHT: Feature Cards */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <FeatureCard
                icon={<BoltRoundedIcon />}
                title="Rapid Testing & Optimization"
                desc="We run faster experiments across ads, creatives, landing pages, and SEO content—so winners scale quickly."
              />
              <FeatureCard
                icon={<InsightsRoundedIcon />}
                title="Data-Driven Insights"
                desc="Clear performance signals from tracking, analytics, and reporting—so decisions are based on numbers, not opinions."
              />
              <FeatureCard
                icon={<SecurityRoundedIcon />}
                title="Brand-Safe, Human-Led"
                desc="AI supports execution, but strategy stays human. Quality checks, approvals, and brand controls are always in place."
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        p: { xs: 2.25, sm: 2.5 },
        border: "1px solid",
        borderColor: "rgba(0,0,0,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.90), rgba(255,255,255,0.72))",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        "&:hover": {
          transform: { md: "translateY(-4px)" },
          borderColor: "rgba(25,118,210,0.35)",
          boxShadow: { md: "0px 16px 42px rgba(0,0,0,0.10)" },
        },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="flex-start">
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
            flex: "0 0 auto",
            mt: 0.2,
          }}
        >
          {icon}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            component="h3"
            sx={{
              fontWeight: 900,
              fontSize: 16.5,
              lineHeight: 1.25,
            }}
          >
            {title}
          </Typography>

          <Typography
            component="p"
            sx={{
              mt: 0.75,
              color: "text.secondary",
              fontSize: 14.5,
              lineHeight: 1.8,
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
