'use client';

import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Geist, Inter } from 'next/font/google';

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial',
//   },
//   shape: { borderRadius: 16 },
// });

// const myFont = localFont({
//   src: '../app/fonts/CircularProBold-Regular.ttf',
//   variable: '--font-circularpro',
// });

// const geist = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-geist' });
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});
const theme = createTheme({
  typography: {
    // fontFamily: 'var(--font-clash-display), sans-serif',
    // fontFamily: geist.style.fontFamily,
    h1: {
      // fontFamily: 'var(--font-inter), sans-serif',
      fontSize: '44px',
      '@media (max-width:900px)': {
        fontSize: '40px',
      },
    },
    h2: {
      fontFamily: geist.style.fontFamily,
      fontSize: '44px',
      '@media (max-width:1200px)': {
        fontSize: '40px',
      },
    },
    h3: {
      fontFamily: geist.style.fontFamily,
      fontSize: '36px',
    },
    h4: {
      fontFamily: geist.style.fontFamily,
      fontSize: '32px',
    },
    h5: {
      fontFamily: geist.style.fontFamily,
      fontSize: '28px',
    },
    h6: {
      fontFamily: geist.style.fontFamily,
      fontSize: '24px',
    },
    subtitle1: {
      fontFamily: inter.style.fontFamily,

      fontSize: '20px',
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: inter.style.fontFamily,

      fontSize: '18px',
      fontWeight: 400,
      // fontFamily: 'var(--font-satoshi), sans-serif',
    },
    body1: {
      fontSize: '16px',
      fontFamily: inter.style.fontFamily,

      fontWeight: 500,
      letterSpacing: '0.9px',
      wordSpacing: '2px',
      // fontFamily: 'var(--font-satoshi), sans-serif',
    },
    caption: {
      fontFamily: inter.style.fontFamily,

      fontSize: '14px',
      fontWeight: 400,
      // fontFamily: 'var(--font-satoshi), sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        p: {
          fontFamily: inter.style.fontFamily,
        },
        strong: {
          fontFamily: inter.style.fontFamily,

          fontWeight: 700,
        },
      },
    },
  },
  shape: { borderRadius: 16 },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
