import { Box } from '@mui/material';
import ArticleBody from './ArticleBody';
import ArticleHeader from './ArticleHeader';

export default function ArticlesIndex() {
  return (
    <Box
      sx={{
        minHeight: '100vh', // min-h-screen
        bgcolor: 'background.default', // bg-background
      }}
    >
      <ArticleHeader />;
      <ArticleBody />
    </Box>
  );
}
