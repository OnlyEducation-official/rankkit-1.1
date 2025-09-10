/* eslint-disable import/prefer-default-export */
// src/app/api/pages-sitemap.xml/route.ts

type Entry = {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
};

const pages: Entry[] = [
  { path: '/', changefreq: 'daily', priority: 1.0 },
  { path: '/services', changefreq: 'weekly', priority: 0.8 },
  { path: '/studio', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact-us', changefreq: 'monthly', priority: 0.6 },
];

function getBaseUrl(req: Request) {
  const env = 'https://api.rankkit.in/';
  if (env) return env.replace(/\/+$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'localhost:3000';
  const proto = req.headers.get('x-forwarded-proto') || 'http';
  return `${proto}://${host}`;
}

function buildUrlset(baseUrl: string, items: Entry[]) {
  const now = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items
  .map(
    ({ path, changefreq, priority, lastmod }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
    <lastmod>${lastmod ?? now}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>`;
}

export function GET(req: Request) {
  const baseUrl = getBaseUrl(req);
  const xml = buildUrlset(baseUrl, pages);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
