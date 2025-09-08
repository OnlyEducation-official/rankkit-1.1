'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#021266',
    },
    error: {
      main: '#e62d3e',
    },
    grey: {
      200: '#FBFBFF',
      300: '#f8fafc',
      400: '#5D5D5D',
      800: '#000000de',
      900: '#222023',
    },
  },
  typography: {
    fontFamily: 'var(--font-clash-display), sans-serif',
    h1: {
      fontSize: '44px',
      '@media (max-width:900px)': {
        fontSize: '40px',
      },
    },
    h2: {
      fontSize: '44px',
      '@media (max-width:1200px)': {
        fontSize: '40px',
      },
    },
    h3: {
      fontSize: '36px',
    },
    h4: {
      fontSize: '32px',
    },
    h5: {
      fontSize: '28px',
    },
    h6: {
      fontSize: '24px',
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '18px',
      fontWeight: 400,
      // fontFamily: 'var(--font-satoshi), sans-serif',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.9px',
      wordSpacing: '2px',
      // fontFamily: 'var(--font-satoshi), sans-serif',
    },
    caption: {
      fontSize: '14px',
      fontWeight: 400,
      // fontFamily: 'var(--font-satoshi), sans-serif',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            background: 'linear-gradient(90deg, #FC5A4A 0%, #021266 100%)',
            borderRadius: '12px',
            paddingInline: '28px',
            paddingBlock: '12px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '16px',
            color: '#fff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            border: '2px solid white',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.2s ease-in-out',
            width: 'fit-content',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          },
        },
      ],
    },
  },
});

export default theme;
