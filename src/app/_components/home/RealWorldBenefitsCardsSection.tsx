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
import Image from "next/image";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

type BenefitCard = {
  title: string;
  desc: string;
  image: string; // put your real image path here
  alt: string;
};

const benefits: BenefitCard[] = [
  {
    title: "More Qualified Leads (Not Just Traffic)",
    desc: "Campaigns are optimized for lead quality and conversion intent—so you get inquiries that are more likely to close.",
    image: "/images/benefits/leads.png",
    alt: "Qualified leads from digital marketing campaigns",
  },
  {
    title: "Lower Cost Per Lead Over Time",
    desc: "With structured testing and optimization, wasted spend reduces and your CPL becomes more stable and predictable.",
    image: "/images/benefits/cpl.png",
    alt: "Lower cost per lead with optimization",
  },
  {
    title: "Clear Tracking & ROI Visibility",
    desc: "We set up tracking so you know what’s working—calls, forms, purchases—so decisions are based on real data.",
    image: "/images/benefits/tracking.png",
    alt: "Analytics and ROI tracking for marketing",
  },
  {
    title: "Better Website Conversions",
    desc: "We improve landing pages and messaging so more visitors become leads—this directly increases ROI on every campaign.",
    image: "/images/benefits/conversion.png",
    alt: "Improved conversion rate through better landing pages",
  },
  {
    title: "Stronger Local Visibility (Near You)",
    desc: "Local SEO and Google Business Profile improvements increase discovery in Maps and local searches—driving calls and visits.",
    image: "/images/benefits/local-seo.png",
    alt: "Local SEO visibility and Google Maps rankings",
  },
  {
    title: "A Consistent Growth System",
    desc: "Instead of random posting, you get a repeatable system—strategy, execution, reporting, and iteration—built to scale.",
    image: "/images/benefits/growth.png",
    alt: "Consistent marketing growth system",
  },
];

export default function RealWorldBenefitsCardsSection() {
  const phoneNumber = "+91 90000 00000"; // replace with your real number
  const telLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

  return (
    <Box
      id="real-world-benefits"
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
        <Stack spacing={1.6} sx={{ mb: { xs: 3, sm: 4 }, maxWidth: 920 }}>
          <Chip
            label="Real-World Benefits"
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
            Real-World Results You Get When You Hire Us for Digital Marketing
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
            Our work is designed to impact business outcomes—qualified leads, conversions,
            and measurable ROI. Here’s what clients typically experience when campaigns
            are built with a performance-first system.
          </Typography>
        </Stack>

        {/* Cards */}
        <Grid container spacing={2.5}>
          {benefits.map((b) => (
            <Grid key={b.title}
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
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack spacing={1.4} sx={{ height: "100%", textAlign: "center" }}>

                  {/* Middle image */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 74,
                      height: 74,
                      mx: "auto",
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1px solid",
                      borderColor: "rgba(0,0,0,0.08)",
                      bgcolor: "rgba(25,118,210,0.06)",
                    }}
                  >
                    <Image
                      src={b.image}
                      alt={b.alt}
                      fill
                      sizes="74px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 950,
                      fontSize: 17.5,
                      lineHeight: 1.25,
                    }}
                  >
                    {b.title}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{
                      color: "text.secondary",
                      fontSize: 14.75,
                      lineHeight: 1.85,
                      maxWidth: 520,
                      mx: "auto",
                    }}
                  >
                    {b.desc}
                  </Typography>

                  <Box sx={{ mt: "auto" }} />
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA row */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.25}
          sx={{
            mt: { xs: 3, sm: 4 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            size="large"
            variant="contained"
            href="#contact"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 900,
              borderRadius: 2,
              px: 3,
              py: 1.2,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Get Free Consultation
          </Button>

          <Button
            size="large"
            variant="outlined"
            href={telLink}
            startIcon={<CallRoundedIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 900,
              borderRadius: 2,
              px: 3,
              py: 1.2,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {phoneNumber}
          </Button>
        </Stack>

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
          Benefits of hiring a digital marketing agency include qualified lead generation,
          lower cost per lead, improved conversion rate, ROI tracking, local SEO visibility,
          and scalable growth through performance marketing and optimization.
        </Typography>
      </Container>
    </Box>
  );
}
