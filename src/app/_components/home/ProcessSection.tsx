"use client";

import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";

const steps = [
    { title: "Discovery & Audit", desc: "Understand your brand, goals, audience, and current performance." },
    { title: "Strategy & Roadmap", desc: "Create a plan across channels: SEO, ads, website, creators." },
    { title: "Execution", desc: "Launch campaigns, build assets, publish content, ship improvements." },
    { title: "Optimization", desc: "Weekly tuning based on data—CPL, ROAS, traffic, conversions." },
    { title: "Reporting", desc: "Clear reports that connect marketing to real business outcomes." },
];

type StepItem = { title: string; desc: string };

export default function ProcessSection() {
    return (
        <Box
            id="process"
            component="section"
            sx={{
                position: "relative",
                py: { xs: 7, sm: 9, md: 10 },
                scrollMarginTop: 96,
                overflow: "hidden",
                background: `radial-gradient(900px 420px at 12% 18%, rgba(25,118,210,0.08), transparent 55%),
                     radial-gradient(700px 420px at 92% 35%, rgba(156,39,176,0.06), transparent 55%),
                     linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))`,
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative" }}>
                {/* Header */}
                <Grid container spacing={3} alignItems="flex-end" sx={{ mb: { xs: 3, sm: 4 } }}>
                    <Grid item xs={12} md={7}>
                        <Stack spacing={1.5} sx={{ maxWidth: 900 }}>
                            <Chip
                                icon={<ChecklistRoundedIcon />}
                                label="Our Process"
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
                                A Structured Workflow That Turns Strategy Into Growth
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
                                We follow a clear, repeatable execution model—so your digital marketing
                                stays consistent, measurable, and scalable across campaigns, SEO, and content.
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        {/* Optional one-line summary card */}
                        <Box
                            sx={{
                                p: { xs: 2.25, sm: 2.75 },
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "rgba(0,0,0,0.10)",
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                            }}
                        >
                            <Typography sx={{ fontWeight: 950, lineHeight: 1.2 }}>
                                Weekly iteration + clear reporting
                            </Typography>
                            <Typography sx={{ color: "text.secondary", mt: 0.5, lineHeight: 1.7 }}>
                                Built for CPL, ROAS, conversions, and long-term visibility.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Steps: 1 per row on mobile, 3 per row on large */}
                <Grid container spacing={2.5}>
                    {steps.map((s, i) => (
                        <Grid key={s.title} size={{
                            xs:12,
                            sm:6,
                            lg:4
                        }}>
                            <Box
                                sx={{
                                    height: "100%",
                                    p: { xs: 2.5, sm: 3 },
                                    borderRadius: 2,
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
                                <Stack spacing={1.2} sx={{ height: "100%" }}>
                                    {/* Step number badge */}
                                    <Stack direction="row" spacing={1.25} alignItems="center">
                                        <Box
                                            aria-hidden
                                            sx={{
                                                width: 38,
                                                height: 38,
                                                borderRadius: 2,
                                                display: "grid",
                                                placeItems: "center",
                                                bgcolor: "rgba(25,118,210,0.10)",
                                                border: "1px solid",
                                                borderColor: "rgba(25,118,210,0.18)",
                                                color: "primary.main",
                                                fontWeight: 950,
                                            }}
                                        >
                                            {i + 1}
                                        </Box>

                                        <Typography
                                            component="h3"
                                            sx={{
                                                fontWeight: 950,
                                                fontSize: 18,
                                                lineHeight: 1.25,
                                            }}
                                        >
                                            {s.title}
                                        </Typography>
                                    </Stack>

                                    <Typography
                                        component="p"
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: 14.75,
                                            lineHeight: 1.9,
                                        }}
                                    >
                                        {s.desc}
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
                        top: "auto",
                        width: 1,
                        height: 1,
                        overflow: "hidden",
                    }}
                >
                    Digital marketing process including strategy, execution, optimization, reporting, and scaling.
                    Performance marketing workflow for lead generation, conversions, and ROI.
                </Typography>
            </Container>
        </Box>
    );
}
