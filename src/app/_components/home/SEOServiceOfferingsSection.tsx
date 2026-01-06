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
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";

type SEOService = {
  title: string;
  desc: string;
  points: string[];
  icon: React.ReactNode;
  tag: string;
};

const seoServices: SEOService[] = [
  {
    title: "SEO Audit & Strategy",
    desc: "We start with a complete website audit to identify technical issues, content gaps, and ranking opportunities—then create an execution roadmap.",
    points: ["Site + competitor audit", "Keyword mapping", "Priority roadmap"],
    icon: <ManageSearchRoundedIcon />,
    tag: "Foundation",
  },
  {
    title: "Technical SEO",
    desc: "Fix crawl, indexing, speed, and Core Web Vitals issues so search engines can discover, understand, and rank your pages properly.",
    points: ["Indexing & crawl fixes", "Core Web Vitals", "Schema + sitemap setup"],
    icon: <CodeRoundedIcon />,
    tag: "Performance",
  },
  {
    title: "On-Page SEO",
    desc: "Optimize page structure and intent signals so your content ranks for the right keywords and converts high-intent visitors.",
    points: ["Titles, headings, internal links", "Content optimization", "CTR improvements"],
    icon: <FactCheckRoundedIcon />,
    tag: "Ranking",
  },
  {
    title: "Content & Keyword Strategy",
    desc: "Create SEO content that matches search intent and builds authority—blogs, service pages, and landing pages designed to rank.",
    points: ["Topic clusters", "Content briefs", "Editorial calendar"],
    icon: <EditNoteRoundedIcon />,
    tag: "Growth",
  },
  {
    title: "Local SEO (Near You)",
    desc: "Improve visibility in Maps and local searches with Google Business Profile optimization, local citations, and location-based content.",
    points: ["GBP optimization", "Local citations", "Location landing pages"],
    icon: <ApartmentRoundedIcon />,
    tag: "Local",
  },
  {
    title: "Off-Page SEO & Authority",
    desc: "Build trust signals through high-quality backlinks, digital PR, and brand mentions—improving authority and long-term rankings.",
    points: ["Link building strategy", "Brand mentions", "Authority growth"],
    icon: <HubRoundedIcon />,
    tag: "Authority",
  },
];

export default function SEOServiceOfferingsSection() {
  return (
    <Box
      id="seo-services"
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
        {/* HEADER */}
        <Grid container spacing={3} alignItems="center" sx={{ mb: { xs: 3, sm: 4 } }}>
          <Grid item xs={12} md={8}>
            <Stack spacing={1.6} sx={{ maxWidth: 900 }}>
              <Chip
                label="SEO Services"
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
                Search Engine Optimization Services We Offer
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
                Our SEO services are designed to improve rankings, increase organic traffic,
                and drive high-intent leads. We combine technical foundations, content strategy,
                and authority-building to deliver long-term search visibility.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* CARDS: 1 per row mobile, 3 per row desktop */}
        <Grid container spacing={2.5}>
          {seoServices.map((s) => (
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
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      aria-hidden
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 3,
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

                    <Box sx={{ flex: 1 }}>
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

                      <Chip
                        label={s.tag}
                        size="small"
                        sx={{
                          mt: 0.75,
                          borderRadius: 2,
                          fontWeight: 900,
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
                    {s.desc}
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
                    {s.points.map((p) => (
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
                      Request SEO plan →
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
          Search engine optimization services including technical SEO, on-page SEO, keyword research,
          content strategy, local SEO, and link building to improve rankings, organic traffic, and leads.
        </Typography>
      </Container>
    </Box>
  );
}
