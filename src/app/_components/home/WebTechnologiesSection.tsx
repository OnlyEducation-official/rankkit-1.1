"use client";

import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import Image from "next/image";

type Technology = {
  name: string;
  desc: string;
  logo: string; // /public/images/tech/...
  alt: string;
};

const technologies: Technology[] = [
  {
    name: "Next.js",
    desc: "Production-grade React framework for fast, SEO-friendly websites.",
    logo: "/images/tech/nextjs.png",
    alt: "Next.js web framework logo",
  },
  {
    name: "React",
    desc: "Component-based UI library for scalable frontend applications.",
    logo: "/images/tech/react.png",
    alt: "React JavaScript library logo",
  },
  {
    name: "Node.js",
    desc: "Backend runtime for APIs, integrations, and server-side logic.",
    logo: "/images/tech/nodejs.png",
    alt: "Node.js backend runtime logo",
  },
  {
    name: "WordPress",
    desc: "CMS for content-driven and SEO-focused websites.",
    logo: "/images/tech/wordpress.png",
    alt: "WordPress CMS logo",
  },
  {
    name: "MongoDB",
    desc: "NoSQL database for flexible, scalable data storage.",
    logo: "/images/tech/mongodb.png",
    alt: "MongoDB database logo",
  },
  {
    name: "AWS",
    desc: "Cloud infrastructure for hosting, scaling, and deployment.",
    logo: "/images/tech/aws.png",
    alt: "Amazon Web Services logo",
  },
];

export default function WebTechnologiesSection() {
  return (
    <Box
      id="web-technologies"
      component="section"
      sx={{
        py: { xs: 7, sm: 9, md: 10 },
        scrollMarginTop: 96,
        background: "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0))",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack
          spacing={1.6}
          alignItems="center"
          textAlign="center"
          sx={{ mb: { xs: 3, sm: 4 } }}
        >
          <Chip
            label="Technology Stack"
            sx={{
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
            Web Technologies We Work With
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "text.secondary",
              fontSize: { xs: 15.5, sm: 16.5 },
              lineHeight: 1.85,
              maxWidth: 880,
            }}
          >
            We use modern, battle-tested web technologies to build fast, secure,
            and scalable digital products—optimized for performance, SEO, and
            long-term growth.
          </Typography>
        </Stack>

        {/* Technology Cards */}
        <Grid container spacing={2.5}>
          {technologies.map((tech) => (
            <Grid key={tech.name} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 5,
                  border: "1px solid",
                  borderColor: "rgba(0,0,0,0.10)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                  transition:
                    "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                  "&:hover": {
                    transform: { md: "translateY(-5px)" },
                    borderColor: "rgba(25,118,210,0.35)",
                    boxShadow: { md: "0px 16px 42px rgba(0,0,0,0.10)" },
                  },
                  textAlign: "center",
                }}
              >
                <Stack spacing={1.4} alignItems="center">
                  {/* Logo */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 64,
                      height: 64,
                    }}
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.alt}
                      fill
                      sizes="64px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 950,
                      fontSize: 17.5,
                      lineHeight: 1.25,
                    }}
                  >
                    {tech.name}
                  </Typography>

                  {/* Description */}
                  <Typography
                    component="p"
                    sx={{
                      color: "text.secondary",
                      fontSize: 14.75,
                      lineHeight: 1.8,
                      maxWidth: 320,
                    }}
                  >
                    {tech.desc}
                  </Typography>
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
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          Web development technologies including Next.js, React, Node.js, WordPress,
          MongoDB, and AWS used to build scalable, SEO-friendly, high-performance websites.
        </Typography>
      </Container>
    </Box>
  );
}
