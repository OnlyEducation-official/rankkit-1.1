import localFont from 'next/font/local';

const clashDisplayFont = localFont({
  src: [
    {
      path: './ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
});

export const satoshiFont = localFont({
  src: [
    {
      path: './Satoshi-Variable.woff2',
      weight: '300 900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export default clashDisplayFont;
