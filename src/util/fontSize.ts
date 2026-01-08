// src/theme/typography.ts
// -----------------------------------------------------
// Responsive Typography Scale (clamp-based)
// xs → xl without media queries
// -----------------------------------------------------
const typography = {
  h1: {
    fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', // 32 → 52
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },

  h2: {
    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', // 28 → 44
    lineHeight: 1.15,
    fontWeight: 700,
    letterSpacing: '-0.015em',
  },

  h3: {
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', // 24 → 36
    lineHeight: 1.2,
    fontWeight: 700,
  },

  h4: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // 20 → 28
    lineHeight: 1.25,
    fontWeight: 600,
  },

  h5: {
    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', // 18 → 24
    lineHeight: 1.3,
    fontWeight: 600,
  },

  h6: {
    fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', // 16 → 20
    lineHeight: 1.35,
    fontWeight: 600,
  },

  bodyLg: {
    fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', // 16 → 18
    lineHeight: 1.7,
    fontWeight: 400,
  },

  body: {
    fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)', // 15 → 16
    lineHeight: 1.65,
    fontWeight: 400,
  },

  bodySm: {
    fontSize: 'clamp(0.8125rem, 1vw, 0.875rem)', // 13 → 14
    lineHeight: 1.6,
    fontWeight: 400,
  },

  caption: {
    fontSize: 'clamp(0.75rem, 0.9vw, 0.8125rem)', // 12 → 13
    lineHeight: 1.5,
    fontWeight: 400,
  },
};

const buttonStyles = {
  primary: {
    fontSize: 'clamp(0.875rem, 1.1vw, 1rem)', // 14 → 16
    fontWeight: 600,
    lineHeight: 1.2,
    textTransform: 'none',
    padding: 'clamp(10px, 1.2vw, 14px) clamp(18px, 2.2vw, 28px)',
    borderRadius: '12px',
  },

  secondary: {
    fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
    fontWeight: 600,
    lineHeight: 1.2,
    textTransform: 'none',
    padding: 'clamp(10px, 1.2vw, 14px) clamp(18px, 2.2vw, 28px)',
    borderRadius: '12px',
  },

  small: {
    fontSize: 'clamp(0.8125rem, 1vw, 0.875rem)', // 13 → 14
    padding: 'clamp(6px, 0.8vw, 8px) clamp(12px, 1.6vw, 16px)',
    borderRadius: '10px',
  },

  large: {
    fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', // 16 → 18
    padding: 'clamp(14px, 1.6vw, 18px) clamp(24px, 2.8vw, 36px)',
    borderRadius: '14px',
  },
};
