"use client";

import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    q: "What does “performance-based digital marketing” mean?",
    a: (
      <>
        It means we optimize marketing for measurable outcomes like{" "}
        <strong>leads, conversions, ROAS, revenue, and cost per lead</strong>—not
        just likes or impressions. We set tracking first, run structured tests,
        then scale what works.
      </>
    ),
  },
  {
    q: "Which services do you offer—Digital Marketing, SEO, Website Development, and Influencer Marketing?",
    a: (
      <>
        Yes. We provide end-to-end growth services including{" "}
        <strong>performance marketing (Meta/Google Ads)</strong>,{" "}
        <strong>SEO services</strong>,{" "}
        <strong>conversion-focused website development</strong>, and{" "}
        <strong>influencer marketing</strong>. You can choose one service or a
        complete growth system.
      </>
    ),
  },
  {
    q: "How soon can I expect results?",
    a: (
      <>
        Timelines depend on your offer, competition, and current setup. Paid ads
        can show early signals in <strong>1–2 weeks</strong>, while SEO is a
        compounding channel that typically takes{" "}
        <strong>8–12+ weeks</strong> for meaningful momentum. We focus on quick
        wins plus sustainable growth.
      </>
    ),
  },
  {
    q: "Do you work with local businesses near me?",
    a: (
      <>
        Yes. We work with local and service-based businesses using{" "}
        <strong>Local SEO</strong>, <strong>Google Business Profile</strong>,
        location-based campaigns, and lead-gen funnels to help you get calls,
        inquiries, and walk-ins.
      </>
    ),
  },
  {
    q: "What do you need from me to get started?",
    a: (
      <>
        We start with a quick discovery and audit. Typically we need access to
        your website, ad accounts (if any), analytics, and a clear understanding
        of your offer, target audience, and goals. If you don’t have assets yet,
        we can build them.
      </>
    ),
  },
  {
    q: "Do you provide reporting and transparency on performance?",
    a: (
      <>
        Yes. You get clear reporting aligned with business metrics—CPL, CPA,
        ROAS, conversion rate, traffic, and funnel performance. We can share
        dashboards and monthly summaries depending on your plan.
      </>
    ),
  },
  {
    q: "Can you build a website that is SEO-ready and optimized for conversions?",
    a: (
      <>
        Absolutely. Our websites are built mobile-first with strong on-page SEO
        foundations, fast performance (Core Web Vitals), clean structure, and
        conversion-focused UI so your marketing converts.
      </>
    ),
  },
  {
    q: "Do you offer customized pricing or fixed packages?",
    a: (
      <>
        We offer both. For many businesses, a custom plan performs better than a
        generic package. Pricing depends on scope (channels, creatives, landing
        pages, SEO content, influencer campaigns) and the growth goals.
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <Box
      id="faq"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        overflow: "hidden",
        background: `radial-gradient(900px 420px at 10% 20%, rgba(25,118,210,0.10), transparent 55%),
                     radial-gradient(700px 420px at 92% 35%, rgba(156,39,176,0.08), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* LEFT: Header + CTA */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2} sx={{ position: { md: "sticky" }, top: { md: 110 } }}>
              <Chip
                icon={<HelpOutlineRoundedIcon />}
                label="FAQ"
                sx={{
                  alignSelf: "flex-start",
                  borderRadius: 2,
                  fontWeight: 900,
                  border: "1px solid",
                  borderColor: "rgba(25,118,210,0.22)",
                  bgcolor: "rgba(25,118,210,0.08)",
                }}
              />

              <Typography
                component="h2"
                sx={{
                  fontWeight: 950,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: 26, sm: 32, md: 36 },
                  lineHeight: 1.15,
                }}
              >
                Frequently Asked Questions
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: 15.5, sm: 16 },
                  lineHeight: 1.85,
                }}
              >
                Answers to common questions about our digital marketing services,
                SEO, website development, influencer marketing, timelines, and
                reporting.
              </Typography>

              <Stack spacing={1.25}>
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
                  Book a free strategy call
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  href="#services"
                  sx={{
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2,
                    py: 1.2,
                  }}
                >
                  Explore services
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT: Accordions */}
          <Grid item xs={12} md={8}>
            <Stack spacing={1.5}>
              {faqs.map((item, idx) => (
                <Accordion
                  key={item.q}
                  disableGutters
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "rgba(0,0,0,0.10)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                    overflow: "hidden",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreRoundedIcon />}
                    aria-controls={`faq-panel-${idx}-content`}
                    id={`faq-panel-${idx}-header`}
                    sx={{
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 1.25, sm: 1.5 },
                      "& .MuiAccordionSummary-content": { my: 0 },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 950,
                        fontSize: { xs: 15.5, sm: 16.5 },
                        lineHeight: 1.35,
                      }}
                    >
                      {item.q}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      px: { xs: 2, sm: 2.5 },
                      pt: 0,
                      pb: { xs: 2, sm: 2.5 },
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        color: "text.secondary",
                        fontSize: 14.75,
                        lineHeight: 1.9,
                      }}
                    >
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>

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
              FAQ for digital marketing agency near you. Topics include performance marketing,
              SEO services, website development, influencer marketing, reporting, pricing,
              lead generation, conversions, and ROI.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
