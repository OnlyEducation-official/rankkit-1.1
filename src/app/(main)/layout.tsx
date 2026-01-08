// app/layout.tsx
// import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';

// import localFont from 'next/font/local';
import { Inter, Geist } from 'next/font/google';
import type { Metadata } from 'next';

const SITE_NAME = 'RankKit Media'; // change to your brand
const SITE_URL = 'https://example.com'; // change
const BRAND_CITY = 'Mumbai'; // change if needed

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Digital Marketing Agency in ${BRAND_CITY}`,
  description:
    'Performance-driven digital marketing agency offering SEO services, website development, and influencer marketing to help brands generate leads, sales, and long-term growth.',
  keywords: [
    'digital marketing agency',
    'seo services',
    'website development',
    'influencer marketing',
    'social media marketing',
    'performance marketing',
    'google ads',
    'meta ads',
    'local seo',
    'lead generation',
    `digital marketing agency in ${BRAND_CITY}`,
    `seo company in ${BRAND_CITY}`,
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_NAME} | Digital Marketing Agency in ${BRAND_CITY}`,
    description:
      'SEO, performance marketing, website development, and influencer marketing for measurable growth.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial',
//   },
//   shape: { borderRadius: 16 },
// });

// const myFont = localFont({
//   src: '../fonts/CircularProBold-Regular.ttf',
//   variable: '--font-circularpro',
// });

// const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Digital marketing agency providing SEO services, website development, performance marketing and influencer marketing.',
    areaServed: 'IN',
    knowsAbout: [
      'Digital Marketing',
      'SEO Services',
      'Website Development',
      'Influencer Marketing',
      'Performance Marketing',
    ],
  };

  return (
    <html lang="en" className={` ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
