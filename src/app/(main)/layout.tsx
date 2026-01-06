// app/layout.tsx
import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";

const SITE_NAME = "RankKit Media"; // change to your brand
const SITE_URL = "https://example.com"; // change
const BRAND_CITY = "Mumbai"; // change if needed

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Digital Marketing Agency in ${BRAND_CITY}`,
  description:
    "Performance-driven digital marketing agency offering SEO services, website development, and influencer marketing to help brands generate leads, sales, and long-term growth.",
  keywords: [
    "digital marketing agency",
    "seo services",
    "website development",
    "influencer marketing",
    "social media marketing",
    "performance marketing",
    "google ads",
    "meta ads",
    "local seo",
    "lead generation",
    `digital marketing agency in ${BRAND_CITY}`,
    `seo company in ${BRAND_CITY}`,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | Digital Marketing Agency in ${BRAND_CITY}`,
    description:
      "SEO, performance marketing, website development, and influencer marketing for measurable growth.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Digital marketing agency providing SEO services, website development, performance marketing and influencer marketing.",
    areaServed: "IN",
    knowsAbout: [
      "Digital Marketing",
      "SEO Services",
      "Website Development",
      "Influencer Marketing",
      "Performance Marketing",
    ],
  };

  return (
    <html lang="en">
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
