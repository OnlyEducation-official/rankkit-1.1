'use client';

import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import { useState } from 'react';
import { Article } from '../page';

export default function SingleArticleIndex({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);

  const handleShare = async () => {
    try {
      const link = window.location.href; // current page URL
      await navigator.clipboard.writeText(link);
      setOpen(true); // show feedback
    } catch (err) {
      console.log('Failed to copy:', err);
    }
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        // pt: { xs: 3, md: 5 },
        // pb: { xs: 4, md: 6 },
        position: 'relative',
        py: { xs: 20, sm: 3, md: 20 },
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: 24, sm: 28, md: 34 },
          fontWeight: 800,
          lineHeight: 1.25,
          letterSpacing: -0.2,
          mb: 1.5,
        }}
      >
        {article.title}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        flexWrap="wrap"
        sx={{ color: 'text.secondary', mb: 1 }}
      >
        <Stack direction="row" spacing={0.75} alignItems="center">
          <AccessTimeRoundedIcon fontSize="small" />
          <Typography variant="body2">{article.readingTime} min read</Typography>
        </Stack>

        <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

        <Tooltip title="Share">
          <IconButton
            size="small"
            color="primary"
            aria-label="Share this article"
            onClick={handleShare}
          >
            <ShareRoundedIcon fontSize="small" /> Share
          </IconButton>
        </Tooltip>

        {/* Optional: feedback snackbar */}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Link copied to clipboard!"
        />
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
        <Avatar sx={{ bgcolor: 'grey', width: 32, height: 32 }}>
          <PersonIcon fontSize="small" />
        </Avatar>
        <Chip
          label="Rankkit Owner"
          size="small"
          sx={{
            bgcolor: 'grey.100',
            '& .MuiChip-label': { px: 1, fontWeight: 600 },
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            bgcolor: 'grey.100', // soft background for contrast
            fontSize: { xs: 12, sm: 13 },
            letterSpacing: 0.2,
            display: 'inline-block',
          }}
        >
          {new Date(article.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Typography>
      </Stack>

      {article.description ? (
        <Typography
          variant="subtitle1"
          sx={{
            fontStyle: 'italic',
            color: 'text.secondary',
            mb: 2.5,
            maxWidth: '100%', // prevent overflow
            wordBreak: 'break-word', // break long words
            overflowWrap: 'break-word', // fallback
            whiteSpace: 'pre-wrap', // preserve spacing and wrap
          }}
        >
          {article.description}
        </Typography>
      ) : null}

      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        <Image
          src={`https://api.rankkit.in${article.image.url}`}
          alt="ok"
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {article.ckeditor_content ? (
        <Typography
          variant="subtitle1"
          sx={{
            fontStyle: 'italic',
            color: 'text.secondary',
            mb: 2.5,
            maxWidth: '100%', // prevent overflow
            wordBreak: 'break-word', // break long words
            overflowWrap: 'break-word', // fallback
            whiteSpace: 'pre-wrap', // preserve spacing and wrap
          }}
        >
          {article.ckeditor_content}
        </Typography>
      ) : null}
    </Container>
  );
}
