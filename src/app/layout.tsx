/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { SnackbarProvider } from '@/components/SnackbarContext';
import MuiThemeProvider from './_components/MuiThemeProvider';
import clashDisplayFont from './fonts/clash-display';
import '@splidejs/react-splide/css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
// app/layout.tsx
// If you use these plugins:
import '@photo-sphere-viewer/markers-plugin/index.css';
import '@photo-sphere-viewer/core/index.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'RankKit Media',
  description: 'Rankkit Media',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplayFont.variable}`} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="kCYoQYDKyd4ZgaV2ekruI3RZsNB93K1xy8PpMbNiRBk"
        />
        {/* Google Analytics (fine to keep as is) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QVHJMEGY1T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QVHJMEGY1T');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KWQ2B6FX');
          `}
        </Script>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KWQ2B6FX');
          `}
        </Script>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2541289066243808');
      fbq('track', 'PageView');
    `,
          }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-clash-display), sans-serif' }}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWQ2B6FX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="google manager"
          />
        </noscript>
        <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
          <MuiThemeProvider>
            <SnackbarProvider>
              {/* {header} */}
              {children}
              {/* {footer} */}
            </SnackbarProvider>
          </MuiThemeProvider>
        </AppRouterCacheProvider>

        {/* Move Clarity here & load lazily */}
        <Script id="ms-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t5mw6fq92k");
          `}
        </Script>
      </body>
    </html>
  );
}
