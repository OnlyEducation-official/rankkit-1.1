/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @next/next/no-async-client-component */

'use client';

import {
  Box,
  Typography,
  Paper,
  Stack,
  Pagination,
  PaginationItem,
  Container,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArticleAll, { Data } from './ArticleAll';

export default function ArticleBody() {
  const [data, setData] = useState<Data>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.rankkit.in/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url&populate[image][fields][1]=alternativeText&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`;
        const response = await fetch(url).then((res) => res.json());
        setData(response.data);
        isLoading(false);

        setPageCount(response.meta.pagination.pageCount);
        setPageSize(response.meta.pagination.pageSize);
        setCurrentPage(response.meta.pagination.page);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, pageSize]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const showEmpty = !loading && (!data || data.length === 0);

  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          minHeight: showEmpty ? 240 : 0,
        }}
      >
        <ArticleAll data={data} loading={loading} />

        <Backdrop
          open={loading}
          sx={{
            position: 'absolute',
            zIndex: (t) => t.zIndex.drawer + 1,
            color: 'primary.main',
            bgcolor: 'rgba(255,255,255,0.6)',
          }}
        >
          <CircularProgress />
        </Backdrop>

        {showEmpty && (
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ py: 6, textAlign: 'center' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              No articles found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
              Try adjusting your filters or check back later for new content.
            </Typography>
          </Stack>
        )}
      </Box>

      <Paper
        elevation={0}
        sx={{
          mt: { xs: 2, sm: 3 },
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          px: { xs: 1, sm: 1.5 },
          py: { xs: 0.5, sm: 1 },
          bgcolor: 'background.paper',
          position: { xs: 'sticky', sm: 'static' },
          bottom: { xs: 12, sm: 'auto' },
          zIndex: (t) => t.zIndex.appBar,
          backdropFilter: { xs: 'saturate(180%) blur(8px)', sm: 'none' },
        }}
        aria-label="Pagination"
      >
        <Stack direction="row" justifyContent="center">
          <Pagination
            page={currentPage}
            count={Math.max(pageCount, 1)}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
            boundaryCount={1}
            size="medium"
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackRoundedIcon, next: ArrowForwardRoundedIcon }}
                {...item}
              />
            )}
            sx={{
              '.MuiPagination-ul': { flexWrap: 'nowrap' },
            }}
          />
        </Stack>
      </Paper>
    </Container>
  );
}
