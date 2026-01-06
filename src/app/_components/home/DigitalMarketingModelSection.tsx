"use client";

import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

const modelSteps = [
  {
    step: "01",
    title: "Strategy & Goal Definition",
    desc: "We begin by understanding your business model, target audience, and revenue goals. KPIs like CPL, CPA, ROAS, and conversions are defined before execution starts.",
    icon: <AccountTreeRoundedIcon />,
  },
  {
    step: "02",
    title: "Channel Execution",
    desc: "Campaigns are launched across selected channels such as Google Ads, Meta Ads, SEO, landing pages, and content—aligned to funnel stages.",
    icon: <PlayCircleRoundedIcon />,
  },
  {
    step: "03",
    title: "Continuous Optimization",
    desc: "Weekly testing of creatives, audiences, keywords, landing pages, and funnels. Underperforming elements are removed; winning assets are scaled.",
    icon: <TuneRoundedIcon />,
  },
  {
    step: "04",
    title: "Performance Scaling",
    desc: "Budgets and efforts are shifted toward high-performing campaigns and channels to maximize ROI and reduce cost per acquisition.",
    icon: <TrendingUpRoundedIcon />,
  },
  {
    step: "05",
    title: "Retention & Growth Loop",
    desc: "Post-conversion strategies like remarketing, email, WhatsApp, and SEO content help increase repeat conversions and lifetime value.",
    icon: <AutorenewRoundedIcon />,
  },
];

// Expecting modelSteps like:
// { step: "01", title: string, desc: string, icon: React.ReactNode }
export default function DigitalMarketingModelSection() {
  return (
    <Box
      id="digital-marketing-model"
      component="section"
      sx={{
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(900px 420px at 12% 18%, rgba(25,118,210,0.10), transparent 55%),
                     radial-gradient(700px 420px at 92% 35%, rgba(156,39,176,0.08), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* HEADER */}
        <Stack spacing={1.8} sx={{ maxWidth: 920, mb: { xs: 4, sm: 5 } }}>
          <Chip
            label="Our Marketing Framework"
            sx={{
              alignSelf: "flex-start",
              fontWeight: 900,
              borderRadius: 2,
              bgcolor: "rgba(25,118,210,0.08)",
              border: "1px solid",
              borderColor: "rgba(25,118,210,0.25)",
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontWeight: 950,
              fontSize: { xs: 26, sm: 34, md: 40 },
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Our Industry-Level Digital Marketing Model
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "text.secondary",
              fontSize: { xs: 15.5, sm: 16.5 },
              lineHeight: 1.85,
              maxWidth: 860,
            }}
          >
            Unlike traditional one-time campaigns, we follow a structured, iterative model
            inspired by Agile workflows—focused on measurable business outcomes like CPL,
            ROAS, conversions, and revenue growth.
          </Typography>

          <Box>
            <Button
              variant="contained"
              href="#contact"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 900,
                borderRadius: 2,
                py: 1.15,
              }}
            >
              Get a free strategy call
            </Button>
          </Box>
        </Stack>

        {/* STEPPER (Mobile-first vertical, desktop also vertical for clarity) */}
        <Box
          sx={{
            position: "relative",
            // timeline line (left)
            "&:before": {
              content: '""',
              position: "absolute",
              left: { xs: 18, sm: 22 },
              top: 6,
              bottom: 6,
              width: 2,
              bgcolor: "rgba(0,0,0,0.10)",
              borderRadius: 2,
            },
          }}
        >
          <Stack spacing={2.25}>
            {modelSteps.map((item, idx) => (
              <Box
                key={item.step}
                sx={{
                  position: "relative",
                  pl: { xs: 6, sm: 7 }, // space for timeline + node
                }}
              >
                {/* Node (icon bubble) */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 0, sm: 2 },
                    top: 14,
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "rgba(25,118,210,0.10)",
                    border: "1px solid",
                    borderColor: "rgba(25,118,210,0.22)",
                    color: "primary.main",
                    zIndex: 1,
                  }}
                  aria-hidden
                >
                  {item.icon}
                </Box>

                {/* Step Card */}
                <Box
                  sx={{
                    borderRadius: 2,
                    p: { xs: 2.25, sm: 2.75 },
                    border: "1px solid",
                    borderColor: "rgba(0,0,0,0.10)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                    transition:
                      "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                    "&:hover": {
                      transform: { md: "translateY(-4px)" },
                      boxShadow: { md: "0px 16px 42px rgba(0,0,0,0.10)" },
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Stack spacing={1.1}>
                    {/* Step header */}
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1}
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      justifyContent="space-between"
                    >
                      <Typography
                        sx={{
                          fontWeight: 950,
                          fontSize: 12.5,
                          letterSpacing: "0.08em",
                          color: "primary.main",
                        }}
                      >
                        STEP {item.step}
                      </Typography>

                      {/* optional visual: small progress pills */}
                      <Stack direction="row" spacing={0.75} aria-hidden>
                        {Array.from({ length: modelSteps.length }).map((_, i) => (
                          <Box
                            key={i}
                            sx={{
                              width: 18,
                              height: 6,
                              borderRadius: 2,
                              bgcolor:
                                i <= idx
                                  ? "rgba(25,118,210,0.55)"
                                  : "rgba(0,0,0,0.08)",
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>

                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 950,
                        fontSize: { xs: 17, sm: 18.5 },
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        color: "text.secondary",
                        fontSize: 14.75,
                        lineHeight: 1.9,
                        maxWidth: 920,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* SEO helper */}
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
          Industry level digital marketing model using performance marketing, agile optimization cycles,
          SEO, paid ads, conversion tracking, and scalable growth strategies.
        </Typography>
      </Container>
    </Box>
  );
}
