import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export default function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <Box>
      <Typography variant="h1">Welcome, {firstName}!</Typography>
    </Box>
  );
}
