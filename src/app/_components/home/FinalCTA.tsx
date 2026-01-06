"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function FinalCTA() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 7, sm: 9 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 2,
            border: "1px solid",
            borderColor: "grey.200",
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: 760 }}>
            <Typography
              component="h2"
              sx={{ fontWeight: 900, fontSize: { xs: 24, sm: 32 } }}
            >
              Ready to Grow with a Digital Marketing Agency Built for ROI?
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              Get a strategy call with actionable recommendations on SEO,
              performance marketing, website improvements, and influencer growth.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button size="large" variant="contained">
                Book a Free Strategy Call
              </Button>
              <Button size="large" variant="outlined" href="#services">
                View Services
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
