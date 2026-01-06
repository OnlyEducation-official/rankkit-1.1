"use client";

import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

type PromoService = {
  title: string;
  desc: string;
  tags: string[];
  points: string[];
  icon: React.ReactNode;
};

const promoServices: PromoService[] = [
  {
    title: "Brand Positioning & Messaging",
    desc: "Clarify what your brand stands for and communicate it with a consistent voice across every platform.",
    tags: ["Positioning", "Messaging", "Consistency"],
    points: ["Brand narrative & tone", "Offer clarity & differentiation", "Messaging guidelines"],
    icon: <CampaignRoundedIcon />,
  },
  {
    title: "Content-led Brand Promotion",
    desc: "Create content that builds trust and recall—reels, carousels, posts, and landing pages designed for visibility.",
    tags: ["Content", "Visibility", "Recall"],
    points: ["Content strategy & calendar", "Design + video production", "Platform-specific distribution"],
    icon: <MovieCreationRoundedIcon />,
  },
  {
    title: "Influencer & Creator Collaborations",
    desc: "Partner with creators who match your audience and brand values to amplify reach with authenticity.",
    tags: ["Creators", "UGC", "Trust"],
    points: ["Creator discovery & vetting", "Campaign execution", "Performance tracking"],
    icon: <GroupsRoundedIcon />,
  },
  {
    title: "Social Media Growth & Community",
    desc: "Build an engaged community that increases brand trust and improves conversions over time.",
    tags: ["Community", "Engagement", "Growth"],
    points: ["Profile optimization", "Engagement systems", "DM/lead flow suggestions"],
    icon: <AutoAwesomeRoundedIcon />,
  },
  {
    title: "Local Brand Promotion (Near You)",
    desc: "Win attention in your city with Google Business Profile, local SEO, and location-based content strategies.",
    tags: ["Local", "Maps", "Discovery"],
    points: ["Google Business Profile", "Local SEO content", "Location-based campaigns"],
    icon: <PublicRoundedIcon />,
  },
  {
    title: "Brand Analytics & Reporting",
    desc: "Measure what matters—reach quality, engagement trends, traffic, leads, and brand growth signals.",
    tags: ["Tracking", "Insights", "ROI"],
    points: ["GA4 + event tracking", "Dashboards & reporting", "Optimization recommendations"],
    icon: <InsightsRoundedIcon />,
  },
];

export default function BrandPromotionServicesSection() {
  return (
    <Box
      id="brand-promotion-services"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        overflow: "hidden",
        background: `radial-gradient(900px 420px at 12% 18%, rgba(25,118,210,0.10), transparent 55%),
                     radial-gradient(700px 420px at 92% 35%, rgba(34,197,94,0.08), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Header */}
        <Grid container spacing={3} alignItems="center" sx={{ mb: { xs: 3, sm: 4 } }}>
          <Grid item xs={12} md={8}>
            <Stack spacing={1.6} sx={{ maxWidth: 920 }}>
              <Chip
                label="Brand Promotion"
                sx={{
                  alignSelf: "flex-start",
                  fontWeight: 900,
                  borderRadius: 2,
                  bgcolor: "rgba(25,118,210,0.08)",
                  border: "1px solid",
                  borderColor: "rgba(25,118,210,0.22)",
                }}
              />

              <Typography
                component="h2"
                sx={{
                  fontWeight: 950,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: 26, sm: 34, md: 40 },
                  lineHeight: 1.12,
                }}
              >
                Brand Promotion Services We Offer
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
                Brand promotion is not just “posting content”. It’s a structured system that
                improves visibility, builds trust, and strengthens recall—so your brand stays
                top-of-mind when customers are ready to buy.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack direction={{ xs: "column", sm: "row", md: "column" }} spacing={1.25}>
              <Button
                size="large"
                variant="contained"
                href="#contact"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 900,
                  borderRadius: 2,
                  py: 1.2,
                }}
              >
                Get pricing & plan
              </Button>
              <Button
                size="large"
                variant="outlined"
                href="#our-tools"
                sx={{
                  textTransform: "none",
                  fontWeight: 900,
                  borderRadius: 2,
                  py: 1.2,
                }}
              >
                See our toolkit
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* Cards: 1 per row mobile, 3 per row desktop */}
        <Grid container spacing={2.5}>
          {promoServices.map((s) => (
            <Grid key={s.title}
                size={{
                    xs:12,
                    sm:6,
                    lg:4
                }}
            >
              <Box
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  p: { xs: 2.5, sm: 3 },
                  border: "1px solid",
                  borderColor: "rgba(0,0,0,0.10)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
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
                  {/* Icon + title */}
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
                        borderColor: "rgba(25,118,210,0.18)",
                        color: "primary.main",
                        flex: "0 0 auto",
                      }}
                    >
                      {s.icon}
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 950,
                        fontSize: 17.5,
                        lineHeight: 1.2,
                      }}
                    >
                      {s.title}
                    </Typography>
                  </Stack>

                  {/* Desc */}
                  <Typography
                    component="p"
                    sx={{
                      color: "text.secondary",
                      fontSize: 14.75,
                      lineHeight: 1.85,
                    }}
                  >
                    {s.desc}
                  </Typography>

                  {/* Tags */}
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {s.tags.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          borderRadius: 2,
                          fontWeight: 900,
                          bgcolor: "rgba(0,0,0,0.03)",
                          border: "1px solid",
                          borderColor: "rgba(0,0,0,0.06)",
                        }}
                      />
                    ))}
                  </Stack>

                  {/* Points */}
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
                    {s.points.map((p) => (
                      <li key={p}>
                        <Typography component="span" sx={{ fontSize: 14 }}>
                          {p}
                        </Typography>
                      </li>
                    ))}
                  </Box>

                  {/* CTA (small) */}
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
                      Get pricing & plan →
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* SEO helper */}
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
          Brand promotion services including brand positioning, content marketing, social media growth,
          influencer collaborations, local brand promotion, and analytics reporting for better visibility
          and trust.
        </Typography>
      </Container>
    </Box>
  );
}
