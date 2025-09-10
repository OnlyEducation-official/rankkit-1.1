/* eslint-disable import/prefer-default-export */
type Entry = {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number; // 0.0–1.0
  lastmod?: string;
};

// 1) Define your services once (can be swapped for a CMS fetch later)
const serviceSlugs = [
  'web-development',
  'branding-and-multimedia',
  'creator-nest',
  'media-production',
  'seo-services',
  'digital-marketing',
  'social-media-management',
];

// 2) Convert slugs → sitemap entries
const services: Entry[] = serviceSlugs.map((slug) => ({
  path: `/services/${slug}`,
  changefreq: 'weekly',
  priority: 0.8,
}));

// 3) Helpers
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

// 4) Route handler
export function GET(req: Request) {
  const baseUrl = getBaseUrl(req);
  const xml = buildUrlset(baseUrl, services);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
