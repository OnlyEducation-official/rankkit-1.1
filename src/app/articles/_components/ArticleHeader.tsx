import { Box, Typography, Button, Container, Stack } from '@mui/material';

export default function ArticleHeader() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: '40vh', md: '50vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 3 },
        py: { xs: 6, sm: 8 },
        background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #fff5f5 100%)',
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          zIndex: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 28, sm: 36, md: 44 },
            lineHeight: 1.2,
            mb: 2,
            letterSpacing: -0.5,
            color: 'text.primary',
          }}
        >
          Explore Our Latest Articles
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 15, sm: 17 },
            color: 'text.secondary',
            mb: 4,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Insights, updates, and guides on education, careers, and industry trends — curated to help
          you make smarter decisions.
        </Typography>

        {/* Optional CTA buttons */}
        {/* <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2, px: 3 }}>
            Read Latest
          </Button>
          <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: 2, px: 3 }}>
            Browse Categories
          </Button>
        </Stack> */}
      </Box>

      {/* Decorative background accents */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: 200,
            height: 200,
            bgcolor: 'primary.light',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: 0.25,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: 250,
            height: 250,
            bgcolor: 'error.light',
            borderRadius: '50%',
            filter: 'blur(140px)',
            opacity: 0.2,
          }}
        />
      </Box>
    </Box>
  );
}
