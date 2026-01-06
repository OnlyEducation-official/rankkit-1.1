"use client";

import { Box, Container, Stack, Typography } from "@mui/material";

const items = [
  { title: "Strategy-first", desc: "Clear roadmap before execution" },
  { title: "SEO + Performance", desc: "Short-term wins + long-term growth" },
  { title: "Conversion-focused", desc: "Web + ads built to convert" },
  { title: "Transparent reporting", desc: "Weekly/monthly performance insights" },
];

export default function TrustBar() {
  return (
    <Box component="section" sx={{ py: { xs: 4, sm: 5 }, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography
            component="h2"
            sx={{ fontWeight: 800, fontSize: { xs: 20, sm: 24 } }}
          >
            Growth Partner for Modern Businesses
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mt: 1 }}
          >
            {items.map((it) => (
              <Box
                key={it.title}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "grey.200",
                  flex: 1,
                }}
              >
                <Typography sx={{ fontWeight: 700 }}>{it.title}</Typography>
                <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
                  {it.desc}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
