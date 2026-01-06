"use client";

import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";

type CampaignType = {
  id: string;
  title: string;
  subtitle: string;
  goal: string;
  bestFor: string;
  metrics: string[];
  icon: React.ReactNode;
};

const campaignTypes: CampaignType[] = [
  {
    id: "awareness",
    title: "Awareness-Focused Campaigns",
    subtitle: "Make the right people discover you",
    goal: "Increase brand visibility, recall, and top-of-mind presence.",
    bestFor: "New brands, new products, new markets, or rebuilding trust.",
    metrics: ["Reach", "Impressions", "Video views", "Brand search lift"],
    icon: <VisibilityRoundedIcon />,
  },
  {
    id: "acquisition",
    title: "Acquisition Campaigns",
    subtitle: "Turn attention into leads or sales",
    goal: "Drive measurable conversions such as leads, calls, signups, or purchases.",
    bestFor: "Service businesses, D2C brands, launches, and lead-generation funnels.",
    metrics: ["CPL / CPA", "ROAS", "Conversion rate", "Lead quality"],
    icon: <PersonAddAltRoundedIcon />,
  },
  {
    id: "engagement",
    title: "Engagement Campaigns",
    subtitle: "Build interaction and intent",
    goal: "Increase engagement that improves trust and pushes users closer to conversion.",
    bestFor: "Brands building community, creators, and businesses with longer decision cycles.",
    metrics: ["Engagement rate", "Saves & shares", "Time on site", "Clicks"],
    icon: <ForumRoundedIcon />,
  },
  {
    id: "upsell",
    title: "Upsell & Cross-Sell Campaigns",
    subtitle: "Increase order value and repeat purchases",
    goal: "Encourage customers to upgrade, add complementary products, or choose premium plans.",
    bestFor: "E-commerce, subscription businesses, and service packages.",
    metrics: ["AOV", "Repeat purchases", "Upgrade rate", "Revenue per customer"],
    icon: <SwapHorizRoundedIcon />,
  },
  {
    id: "loyalty",
    title: "Loyalty & Referral Campaigns",
    subtitle: "Turn customers into advocates",
    goal: "Increase retention and referrals through loyalty programs and repeat engagement.",
    bestFor: "Brands with repeat purchase potential and strong customer experience.",
    metrics: ["Retention rate", "Referral rate", "LTV", "Repeat order rate"],
    icon: <LoyaltyRoundedIcon />,
  },
];

export default function CampaignTypesSection() {
  const [activeId, setActiveId] = React.useState<string>(campaignTypes[0].id);
  const active = campaignTypes.find((c) => c.id === activeId) ?? campaignTypes[0];

  return (
    <Box
      id="campaign-types"
      component="section"
      sx={{
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(900px 420px at 12% 18%, rgba(25,118,210,0.08), transparent 55%),
                     radial-gradient(700px 420px at 92% 35%, rgba(156,39,176,0.06), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.6} sx={{ maxWidth: 960, mb: { xs: 3, sm: 4 } }}>
          <Chip
            label="Campaign Playbook"
            sx={{
              alignSelf: "flex-start",
              fontWeight: 900,
              borderRadius: 999,
              bgcolor: "rgba(25,118,210,0.08)",
              border: "1px solid",
              borderColor: "rgba(25,118,210,0.22)",
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontWeight: 950,
              fontSize: { xs: 26, sm: 34, md: 40 },
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
            }}
          >
            Different Types of Marketing Campaigns (and what each one is for)
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "text.secondary",
              fontSize: { xs: 15.5, sm: 16.5 },
              lineHeight: 1.85,
              maxWidth: 900,
            }}
          >
            Not every campaign is meant to “sell” immediately. The best results happen when you
            choose the right campaign type for the right goal—awareness, acquisition, engagement,
            upsell, or loyalty.
          </Typography>
        </Stack>

        {/* Layout: Left = selectable list, Right = details panel */}
        <Grid container spacing={2.5} alignItems="stretch">
          {/* Left Rail */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                borderRadius: 2,
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.10)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                overflow: "hidden",
              }}
            >
              <Stack>
                {campaignTypes.map((c, idx) => {
                  const isActive = c.id === activeId;

                  return (
                    <Box key={c.id}>
                      <Box
                        role="button"
                        tabIndex={0}
                        onClick={() => setActiveId(c.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") setActiveId(c.id);
                        }}
                        sx={{
                          cursor: "pointer",
                          px: { xs: 2, sm: 2.5 },
                          py: { xs: 2, sm: 2.25 },
                          display: "flex",
                          gap: 1.5,
                          alignItems: "flex-start",
                          transition: "background 180ms ease",
                          background: isActive
                            ? "rgba(25,118,210,0.10)"
                            : "transparent",
                          "&:hover": {
                            background: isActive
                              ? "rgba(25,118,210,0.12)"
                              : "rgba(0,0,0,0.03)",
                          },
                        }}
                      >
                        <Box
                          aria-hidden
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            display: "grid",
                            placeItems: "center",
                            bgcolor: isActive
                              ? "rgba(25,118,210,0.14)"
                              : "rgba(0,0,0,0.04)",
                            color: isActive ? "primary.main" : "text.primary",
                            flex: "0 0 auto",
                          }}
                        >
                          {c.icon}
                        </Box>

                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              fontWeight: 950,
                              fontSize: 15.5,
                              lineHeight: 1.25,
                            }}
                          >
                            {c.title}
                          </Typography>
                          <Typography
                            sx={{
                              mt: 0.4,
                              color: "text.secondary",
                              fontSize: 13.75,
                              lineHeight: 1.5,
                            }}
                          >
                            {c.subtitle}
                          </Typography>
                        </Box>

                        <ArrowRightAltRoundedIcon
                          aria-hidden
                          sx={{
                            mt: 0.2,
                            color: isActive ? "primary.main" : "rgba(0,0,0,0.35)",
                          }}
                        />
                      </Box>

                      {idx !== campaignTypes.length - 1 && (
                        <Divider sx={{ borderColor: "rgba(0,0,0,0.07)" }} />
                      )}
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Grid>

          {/* Right Details Panel */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                height: "100%",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "rgba(0,0,0,0.10)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                p: { xs: 2.5, sm: 3 },
              }}
            >
              <Stack spacing={1.5} sx={{ height: "100%" }}>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Box
                    aria-hidden
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 2,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(25,118,210,0.12)",
                      color: "primary.main",
                      border: "1px solid rgba(25,118,210,0.18)",
                    }}
                  >
                    {active.icon}
                  </Box>

                  <Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 950,
                        fontSize: { xs: 18, sm: 20 },
                        lineHeight: 1.2,
                      }}
                    >
                      {active.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mt: 0.25 }}>
                      {active.subtitle}
                    </Typography>
                  </Box>
                </Stack>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontWeight: 950,
                        fontSize: 12.5,
                        letterSpacing: "0.08em",
                        color: "primary.main",
                        mb: 0.75,
                      }}
                    >
                      PRIMARY GOAL
                    </Typography>
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                      {active.goal}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontWeight: 950,
                        fontSize: 12.5,
                        letterSpacing: "0.08em",
                        color: "primary.main",
                        mb: 0.75,
                      }}
                    >
                      BEST FOR
                    </Typography>
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                      {active.bestFor}
                    </Typography>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    mt: 0.5,
                    p: { xs: 2, sm: 2.25 },
                    borderRadius: 2,
                    border: "1px solid rgba(0,0,0,0.08)",
                    bgcolor: "rgba(0,0,0,0.02)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 950,
                      mb: 1,
                      fontSize: 14,
                    }}
                  >
                    What success looks like (metrics)
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {active.metrics.map((m) => (
                      <Chip
                        key={m}
                        label={m}
                        size="small"
                        sx={{
                          borderRadius: 2,
                          fontWeight: 900,
                          bgcolor: "rgba(25,118,210,0.08)",
                          border: "1px solid",
                          borderColor: "rgba(25,118,210,0.18)",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Typography
                  sx={{
                    mt: "auto",
                    color: "text.secondary",
                    lineHeight: 1.9,
                    fontSize: 14.75,
                  }}
                >
                  Tip: Great marketing results usually come from sequencing these campaign types
                  correctly—awareness builds demand, acquisition captures it, engagement increases intent,
                  upsell grows revenue, and loyalty drives repeat business.
                </Typography>
              </Stack>
            </Box>
          </Grid>
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
          Types of marketing campaigns include awareness campaigns, acquisition campaigns, engagement campaigns,
          upsell and cross-sell campaigns, and loyalty referral campaigns.
        </Typography>
      </Container>
    </Box>
  );
}
