'use client';

import theme from '@/theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { ReactNode } from 'react';

function MuiThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MuiThemeProvider;
