/* eslint-disable import/prefer-default-export */
// src/app/api/sitemap.xml/route.ts

function getBaseUrl(req: Request) {
  const env = 'https://api.rankkit.in/';
  if (env) return env.replace(/\/+$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'localhost:3000';
  const proto = req.headers.get('x-forwarded-proto') || 'http';
  return `${proto}://${host}`;
}

function buildSitemapIndex(baseUrl: string, sitemapPaths: string[]) {
  const lastmod = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths
  .map(
    (p) => `  <sitemap>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`,
  )
  .join('\n')}
</sitemapindex>`;
}

export function GET(req: Request) {
  const baseUrl = getBaseUrl(req);

  // List all your API sitemaps here (no ".ts" in URLs)
  const sitemapPaths = [
    '/api/pages-sitemap.xml',
    '/api/services-sitemap.xml', // add more later
    '/api/articles-sitemap.xml', // add more later
  ];

  const xml = buildSitemapIndex(baseUrl, sitemapPaths);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
