/* eslint-disable @next/next/no-img-element */

'use client';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { number } from 'zod';
import { id } from 'zod/v4/locales';
import Link from 'next/link';
import ArticleHeader from './ArticleHeader';
import FeaturedArticle from './FeaturedArticle';

export type Paginnation = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Image = {
  id: number;
  documentId: string;
  url?: string;
  alternativeText: string;
};

export type Data = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  image: Image;
}[];

export default function ArticleAll({ data, loading }: { data: Data; loading: boolean }) {
  const fallbackImg = 'https://api.rankkit.in/_static/placeholder-16x9.png'; // put a tiny CDN placeholder
  const baseImageUrl = 'https://api.rankkit.in';

  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 4 },
        maxWidth: 1440,
        mx: 'auto',
      }}
    >
      {/* <FeaturedArticle data={data[0]} /> */}

      <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
        {data.map((d) => {
          const imgSrc = !loading && d?.image?.url ? `${baseImageUrl}${d.image.url}` : fallbackImg;

          const alt = d?.image?.alternativeText || d?.title || 'Article image';

          const href = d?.slug ? `/articles/${d.slug}` : '#';

          return (
            <Grid key={d.id} size={{ xs: 6, sm: 4, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                  transition: 'transform .2s ease, box-shadow .2s ease',
                  '&:hover': {
                    transform: { md: 'translateY(-2px)' },
                    boxShadow: { md: 4 },
                  },
                }}
              >
                <CardActionArea component={Link} href={href} sx={{ display: 'block' }}>
                  {loading ? (
                    <Skeleton variant="rectangular" sx={{ aspectRatio: '16/9' }} />
                  ) : (
                    <CardMedia
                      component="img"
                      src={imgSrc}
                      alt={alt}
                      loading="lazy"
                      sx={{
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        bgcolor: 'grey.100',
                      }}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImg;
                      }}
                    />
                  )}

                  <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
                    {/* Title */}
                    {loading ? (
                      <Skeleton height={28} sx={{ mb: 1.5 }} />
                    ) : (
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: { xs: 16, sm: 18 },
                          fontWeight: 700,
                          lineHeight: 1.25,
                          mb: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {d.title}
                      </Typography>
                    )}

                    {/* Description (3-line clamp on mobile) */}
                    {loading ? (
                      <>
                        <Skeleton />
                        <Skeleton width="80%" />
                      </>
                    ) : (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: { xs: 3, sm: 2 },
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {d.description}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
